import currencyCodes from 'currency-codes';
import countryList from 'country-list'

export const classnames = (...classNames) => classNames.join(' ').trim();

export const formatCurrency = (currency, country = '') => {
    const locale = window.navigator.language.split('-')[0] + '-' + (countryList.getCode(country) || window.navigator.language.split('-')[1]);
    const countryName = currencyCodes.countries().find(name => name.toLowerCase().indexOf(country.toLowerCase()) >= 0) || '';
    const currencyCode = currencyCodes.country(countryName);

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
    } else if (currency > 1000) {
        simplifiedCurrency = Math.floor(currency / 1000);
        suffix = 'K'
    }

    const formatted = Intl.NumberFormat(...intlNumberFormatParams).format(simplifiedCurrency) + suffix
    return formatted;
}

export const displayDateDifference = (date, now = new Date()) => {
    let comparedDate = date;
    if (!(date instanceof Date)) {
        comparedDate = new Date(comparedDate)
    }
    if (isNaN(Date.parse(comparedDate))) {
        console.warn('[displayDateDifference] parsing invalid date');
        return '';
    }
    const msPerHour = 1000 * 60 * 60;
    const msPerDay = 1000 * 60 * 60 * 24;
    const msPerWeek = 1000 * 60 * 60 * 24 * 7;
    const comparedDateInMS = comparedDate.getTime();
    const nowInMS = now.getTime();
    const differenceInMS = nowInMS - comparedDateInMS;

    const isPlural = (difference, word) => difference > 1 ? `${word}s`: word;

    let diff = Math.floor(differenceInMS / msPerHour);

    console.log(date, diff);

    if (differenceInMS > msPerWeek) {
        diff = Math.floor(differenceInMS / msPerWeek);
        return `${diff} ${isPlural(diff, 'week')} ago`;
    }
    if (differenceInMS > msPerDay) {
        diff = Math.floor(differenceInMS / msPerWeek);
        return `${diff} ${isPlural(diff, 'day')} ago`;
    }
    return `${diff} ${isPlural(diff, 'hour')} ago`;
}