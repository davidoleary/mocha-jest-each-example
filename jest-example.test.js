const assert = require('assert');
const forEach = require('mocha-each');
 
function add(a, b) {
  return parseInt(a) + parseInt(b);
}
 
describe('test add method', () => {
  it.each`
    a     | b     | result
    ${2}  | ${3}  | ${5}
    ${20} | ${30} | ${50}
    ${-2} | ${-3} | ${-5}
  `('should return $result when $a and $b are used', ({a, b, result}) => {
    expect(add(a, b)).toEqual(result);
  });
});