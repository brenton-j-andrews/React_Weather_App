// File containing utility functions.

import format from 'date-fns/format'
import fromUnixTime from 'date-fns/fromUnixTime';

// Convert unix timestamp to week day name, ex: 'Monday'.
function unixToDayName(timestamp) {
    let date = format(fromUnixTime(timestamp), "EEEE");
    return date;
}

export {
    unixToDayName
}