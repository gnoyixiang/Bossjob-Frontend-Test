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
    const msPerSecond = 1000;
    const msPerMinute = 1000 * 60;
    const msPerHour = 1000 * 60 * 60;
    const msPerDay = 1000 * 60 * 60 * 24;
    const msPerWeek = 1000 * 60 * 60 * 24 * 7;
    const comparedDateInMS = comparedDate.getTime();
    const nowInMS = now.getTime();
    const differenceInMS = nowInMS - comparedDateInMS;

    const isPlural = (difference, word) => difference > 1 ? `${word}s` : word;

    let diffInWeeks = Math.floor(differenceInMS / msPerWeek);
    let diffInDays = Math.floor(differenceInMS / msPerDay);
    let diffInHours = Math.floor(differenceInMS / msPerHour);
    let diffInMins = Math.floor(differenceInMS / msPerMinute);
    let diffInSecs = Math.floor(differenceInMS / msPerSecond);
    console.log(diffInWeeks, diffInDays, diffInHours, diffInMins);
    if (diffInWeeks) {
        return `${diffInWeeks} ${isPlural(diffInWeeks, 'week')} ago`;
    }
    if (diffInDays) {
        return `${diffInDays} ${isPlural(diffInDays, 'day')} ago`;
    }
    if (diffInHours) {
        return `${diffInHours} ${isPlural(diffInHours, 'hour')} ago`;
    }
    if (diffInMins) {
        return `${diffInMins} ${isPlural(diffInMins, 'min')} ago`;
    }
    return `${diffInSecs} ${isPlural(diffInSecs, 'sec')} ago`;
}