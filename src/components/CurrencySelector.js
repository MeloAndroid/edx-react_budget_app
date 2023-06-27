import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const CurrencySelector = () => {
    const {currency, currencyName, dispatch} = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
    }

    return (
        <div>
            <div className="dropdown currency-selector">
                <button className="btn dropdown-toggle" type="button" id="currencyMenu" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency ({currency} {currencyName})
                </button>
                <ul className="dropdown-menu" aria-labelledby="currencyMenu">
                    <li><button className={`dropdown-item ${currency === '$' ? 'active' : ''}`} onClick={() => changeCurrency('$')}>$ Dollar</button></li>
                    <li><button className={`dropdown-item ${currency === '£' ? 'active' : ''}`} onClick={() => changeCurrency('£')}>£ Pound</button></li>
                    <li><button className={`dropdown-item ${currency === '€' ? 'active' : ''}`} onClick={() => changeCurrency('€')}>€ Euro</button></li>
                    <li><button className={`dropdown-item ${currency === '₹' ? 'active' : ''}`} onClick={() => changeCurrency('₹')}>₹ Ruppee</button></li>
                </ul>
            </div>
        </div>
    );

}

export default CurrencySelector;