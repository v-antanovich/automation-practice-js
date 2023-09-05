const calculator = require("../calculator.js");
const addContext = require("mochawesome/addContext");
var assert = require("assert");

describe("Test with mocha", function () {
  describe("Calculator: sum", function () {
    it("should return the sum of two nubmers", function () {
      calculator.a = 3;
      calculator.b = 6;
      assert.equal(calculator.sum(), 9);
    });
  });
});
