//Function Name Goes Here
/*
  INSTRUCTIONS GO HERE

    Example:

      exampleCodeGoesHere

*/

//CODE GOES HERE

/*-----*/

//TestGoesHere
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