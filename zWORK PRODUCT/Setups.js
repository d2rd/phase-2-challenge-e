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
  it.only('[functionName] should [expected outcome]', function(){
    app.[functionName](user.name = 'Samuel')
    console.log(user)
    expect(app.[functionName](user.name = 'Samuel')).to.own.include(user.friends = "Ralph");
    }),

  it('[functionName] should add the value "Ralph" to the object whose "name" key has a value of "Annie"', "WRONG SYNTAX use both keys", function(){
        expect(app.[functionName]({name: 'Annie'})).to.own.include({friends: "Ralph"});
      }),

  it('[functionName] should add the value "Ralph" to the object whose "name" key has a value of "Annie"',"both keys not required?", function(){
        expect(app.[functionName]({name: 'Annie', friends: 'Ralph'})).to.own.include({friends: "Ralph"});
      })
});
// /*-----*/