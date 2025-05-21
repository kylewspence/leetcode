/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
let f = celsius * 1.8 + 32.00
let k = celsius + 273.15;
return [k, f]
};