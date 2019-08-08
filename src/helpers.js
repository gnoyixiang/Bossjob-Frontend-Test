import currencyCodes from 'currency-codes';
import countryList from 'country-list'

export const classnames = (...classNames) => classNames.join(' ').trim();

window.currencyCodes = currencyCodes;
window.countryList = countryList;

export const formatCurrency = (value, currencyCode) => {
    let simplifiedValue, suffix;
    const locale = window.navigator.language;
    // console.log('[formatCurrency]', value, locale, currencyCode);

    if (value > 1000000) {
        simplifiedValue = Math.floor(value / 1000000);
        suffix = 'M'
    } else if (value > 1000) {
        simplifiedValue = Math.floor(value / 1000);
        suffix = 'K'
    }

    return (currencyCode ? Intl.NumberFormat(
        locale,
        {
            style: 'currency',
            currency: currencyCode ? currencyCode[0].code : '',
            currencyDisplay: 'symbol',
            minimumFractionDigits: 0,
        }
    ).format(simplifiedValue) : `$${simplifiedValue}`) + suffix
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
    console.log('[displayDateDifference]', { date, now, diffInWeeks, diffInDays, diffInHours, diffInMins });
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