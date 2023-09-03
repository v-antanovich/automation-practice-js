/*
What is MOCHA and how to istall
Mocha is a JavaScript-based testing framework running on NodeJS and browser.
It is used to organize the tests and execute them in a logical sequence to make the testing more effective.
Prerequisites: NodeJS and NPM (Chek installation: node -v; npm -v)
npm install npm
npm install mocha
npm install mocha -g
mocha -version
https://mochajs.org/

*/

/*
FUNCTION CALL
describe() - grouping tests. 
The describe() function takes 2 arguments. 
The first is the name or description of the test group and the second one is the callback function, 
which is a function that needs to be executed after another function has finished executing.
it() - individual test
*/

/*
MOCHA HOOKS
before() - befor all tests;
after() - after all tests;
beforeEach() - before each test;
afterEach() - after each test;
*/


/*
TEST FEATURES
Exclusive - it.only()
Inclusive - it.skip()
Pending   - it("Description without callback function") 
*/

/*
Report:
JSON: https://www.npmjs.com/package/mocha-json-output-reporter
Run: npx mocha --reporter mocha-json-output-reporter
npx mocha --reporter mocha-json-output-reporter --reporter-options output=mocha-report.json

https://www.lambdatest.com/blog/how-to-generate-mocha-reports-with-mochawesome/
Run: npx mocha --reporter mochawesome
*/

function square(side) {
    return side ** 2;
  }

var assert = require("assert");
describe("Mathematical Operations - Test Suite", function () {
it("Addition of two numbers", function () {
    this.retries(3);
    var a = 10;
    var b = 10;
    var c = a + b;
    assert.equal(c, 20);
  });

  it("Second test", function () {
    var a = 10;
    var b = 10;
    var c = a - b;
    assert.equal(c, 0);
  });

  const aq = 99;
  it("Square", function () {
    if (aq < 100) {
        assert.equal(square(20), 400);
    } else {
        this.skip();
    }
    
    // assert.notEqual(square(20), 401);
  });
});

before("Execute Before All Tests", function () {
    console.log("Test Suite Started");
  });
  
  beforeEach("Execute Before Each Test", function () {
    console.log("Test Started 1-st Function");
  });
  
  beforeEach("Execute Before Each Test", function () {
    console.log("Test Started 2-nd Function");
  });
  
  afterEach("Execute After Each Test", function () {
    console.log("Test Finished");
  });
  
  after("Execute After All Tests", function () {
    console.log("Test Suite Finished");
  });