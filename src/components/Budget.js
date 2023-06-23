import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {budget, expenses, dispatch} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleChangeBudget = (event) => {
        const new_budget = event.target.value;

        if (new_budget > 20000){
            alert("The value cannot exceed maximum budget of £20,000");
            return;            
        }

        if (new_budget < totalExpenses){
            alert("The value cannot be lower than total expenses of £"+totalExpenses);
            return;            
        }

        //alert(new_budget);
        dispatch({
            type: 'CHG_BUDGET',
            payload: new_budget
        });

    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: £
                <input
                    required='required'
                    type='number'
                    step='10'
                    id='budget'
                    value={budget}
                    width='10'
                    style={{ marginLeft: '0.2rem'}}
                    onChange={handleChangeBudget}>
                </input>
            </span>
        </div>
    );
};

export default Budget;