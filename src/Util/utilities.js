// File containing utility functions.

import format from 'date-fns/format'
import fromUnixTime from 'date-fns/fromUnixTime';

// Convert unix timestamp to week day name, ex: 'Monday'.
function unixToDayName(timestamp) {
    let date = format(fromUnixTime(timestamp), "EEEE");
    return date;
}

function unixToTime(timestamp) {
    let time = format(fromUnixTime(timestamp), 'HHmm');
    return time;
}

export {
    unixToDayName,
    unixToTime
}