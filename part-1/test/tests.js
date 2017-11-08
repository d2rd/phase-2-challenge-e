var mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;

// const app = require('./part-1/functions'); //declares 'app' and looks for 'functions.js' outside the test folder

// console.log(app);  //*****REMOVE ON FINAL  displays functions that were actually imported. 

//month()
describe('month find the month for a given Date object, returning the name of the month as a string', function(){
  //declared objects/arrays
    const calendar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

  //tests to be executed
  it('month should be a function', "ERROR:  NOT A FUNCTION", function(){
      expect(month(date)).to.be.a('function');
    }),

  it('month should show "June" for Date(1953, 6, 5)', function(){
    // month(new Date(1953, 6, 5))
    // console.log(new Date(1953, 6, 5))
    expect(month(new Date(1953, 6, 5))).to.be('June');
    });
  // ,

  // it('month should [expected outcome]', '[OPTIONAL "ERROR MESSAGE TO RETURN"]', function(){
  //       expect(month([expressionToEvaluate])).to.own.include([CONDITION TO BE MET]);
  //     }),

  // it('month should [expected outcome]', [OPTIONAL "ERROR MESSAGE TO RETURN"], function(){
  //       expect(month([expressionToEvaluate])).to.own.include([CONDITION TO BE MET]);
  //     })
});
// /*-----*/

//reverseSentence()


//nameProps()

