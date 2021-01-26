var assert = require("assert");
var Calculate =  require('./index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it("returns factorial of 5", ()=>{
      const number = 5;
      const expectedResult = 120;
      const result = Calculate.factorial(number);
      assert.equal(result, expectedResult);
    })
      it("returns factorial of -2", ()=>{
      const number = -2;
      const expectedResult = -1;
      const result = Calculate.factorial(number);
      assert.equal(result, expectedResult);
    })
    it("returns factorial of 0", ()=>{
      const number = 0;
      const expectedResult = 1;
      const result = Calculate.factorial(number);
      assert.equal(result, expectedResult);
    })
      it("returns factorial of 1", ()=>{
      const number = 1;
      const expectedResult = 1;
      const result = Calculate.factorial(number);
      assert.equal(result, expectedResult);
    })
  });
});