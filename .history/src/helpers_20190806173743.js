import currencyCodes from 'currency-codes';
import countryList from 'country-list'

export const classnames = (...classNames) => classNames.join(' ');

export const formatCurrency = (currency, country) => {
    const locale = window.navigator.language.split('-')[0] + '-' + (countryList.getCode(country) || window.navigator.language.split('-')[1]);
    const countryName = currencyCodes.countries().find(name => name.toLowerCase().indexOf(country.toLowerCase()) >= 0);
    const currencyCode = currencyCodes.country(countryName || '');

    const intlNumberFormatParams = [
        locale,
        {
            style: 'currency',
            currency: currencyCode ? currencyCode[0].code : '',
            currencyDisplay: 'symbol',
            minimumFractionDigits: 0,
        }
    ]

    let simplifiedCurrency, suffix;

    if (currency > 1000000) {
        simplifiedCurrency = Math.floor(currency / 1000000);
        suffix = 'M'
    } else if (currency > 1000){
        simplifiedCurrency = Math.floor(currency / 1000);
        suffix = 'K'
    }

    const formatted = Intl.NumberFormat(...intlNumberFormatParams).format(simplifiedCurrency) + suffix
    return formatted;
}