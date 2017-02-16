/**
 * Converts Number to Text.
 *
 * @param  {Number} num
 * @param  {String} type
 * @return {String}
 */
 
var number2Money = require('./lib/number2Money');

module.exports = function (num) {
    return number2Money(num);
};
