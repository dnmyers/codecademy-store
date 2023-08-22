import { currenciesData } from '../../data';
import { setCurrency } from './currencyFilterSlice';

export const CurrencyFilter = ({
    CurrencyFilter,
    dispatch
}) => {
    const onClickHandler = (currency) => {
        dispatch(setCurrency(currency));
    };

    return (
        <div id="currency-filters-container">
            <h3>Choose a Currency</h3>
            {
                currenciesData.map(createCurrencyButton)
            }
        </div>
    );

    function createCurrencyButton(currency) {
        return (
            <button
                className={`currency-button ${
                    currencyFilter === currency && 'selected'
                }`}
                key={currency}
                onClick={() => onClickHandler(currency)}
            >
                {currency}
            </button>
        );
    }
};