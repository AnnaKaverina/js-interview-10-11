const _ = require('lodash')

// variant without using lodash

function fetchGracePeriodLogicFromMapping (cardId, mapping = '') {
    const regExpId = new RegExp('\\D' + cardId + '\\D', 'g');
    const matchIds = mapping.match(regExpId);
    if (matchIds === null) return null;
    const indexTo = mapping.indexOf(matchIds[matchIds.length - 1]) + 1;
    const substring = mapping.slice(0, indexTo);
    const regExpName = new RegExp(/[A-Za-z]+/g);
    const matchNames = substring.match(regExpName);
    return matchNames[matchNames.length - 1];

}

module.exports = fetchGracePeriodLogicFromMapping
