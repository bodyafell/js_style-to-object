'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let attributePairs = sourceString.split(';');

  attributePairs = attributePairs.filter((pair) => pair.trim() !== '');
  attributePairs = attributePairs.map((pair) => pair.split(':'));

  attributePairs = attributePairs
    .map((pair) => {
      if (pair.length === 2) {
        return [pair[0].trim(), pair[1].trim()];
      }

      return null;
    })
    .filter((pair) => pair !== null);

  const result = attributePairs.reduce((acc, pair) => {
    acc[pair[0]] = pair[1];

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
