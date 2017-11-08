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
//Requirements
  // Write a function reverseSentence(string) that takes a string of words and returns a string with the words in reverse order. If there is only one word in the string return it unchanged. Consider any series of non-space characters a word.
//[functionName]
describe('[functionName] [what function does]', function(){
  //declared objects/arrays
    let [arrayName] = [
      {
        'name'    :'Samuel', 
        'friends' :[]
      },
      {
        'name'    : 'Ralph', 
        'friends' : []
      },
      {
        'name'    : 'Annie',
        'friends' : []
      }
    ]; 

  let [objName] = 
      {
        'key1' :'value1', 
        'key2' :[],
        'key3' :'value3'
      },
      {
        'key1' :'value1', 
        'key2' :[],
        'key3' :'value3'
      },
      {
        'key1' :'value1', 
        'key2' :[],
        'key3' :'value3'
      }; 

  //tests to be executed
  it('[functionName] should [expected outcome]', "ERROR:  NOT A FUNCTION", function(){
          expect(app.[functionName]).to.be.a('function');
        }),
  it.only('[functionName] should [expected outcome]', [OPTIONAL "ERROR MESSAGE TO RETURN"], function(){
    app.[functionName]([argumentsToPass])
    console.log([argumentsToPass])
    expect(app.[functionName]([expressionToEvaluate])).to.own.include([CONDITION TO BE MET]);
    }),

  it('[functionName] should [expected outcome]', [OPTIONAL "ERROR MESSAGE TO RETURN"], function(){
        expect(app.[functionName]([expressionToEvaluate])).to.own.include([CONDITION TO BE MET]);
      }),

  it('[functionName] should [expected outcome]', [OPTIONAL "ERROR MESSAGE TO RETURN"], function(){
        expect(app.[functionName]([expressionToEvaluate])).to.own.include([CONDITION TO BE MET]);
      })
});
// /*-----*/

//nameProps
// Write a function nameProps(obj) that returns the names of the properties an object has in alphabetical order. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.
describe('nameProps returns the names of the properties an object has in alphabetical order.', function(){
  //declared objects/arrays
    let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
};
  //tests to be executed
    it('app.nameProps() to be a function', function(){
          expect(nameProps).to.be.a('function');
        }),

    it('nameProps() list the properties of "obj" in alphabetical order', function(){
        expect(nameProps(obj)).to.be.have.ordered.members;
      }) 
});
// /*-----*/
