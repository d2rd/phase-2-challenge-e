//Show a month
/*
  Write a function month(date) to find the month for a given Date object, returning the name of the month as a string ('January', 'February', 'March', 'April', 'May', ... etc).

    Example:

    let date = new Date(2017, 5, 19) // June 19, 2017
    month(date) // returns "June"

    let christmas = new Date(2017, 11, 25) // Dec 25, 2017
    month(christmas) // returns "December"

*/

function month(date) {
  let monthName = date.getMonth() -1;
  console.log(calendar[monthName]);
};
month(new Date(1953, 6, 5));
//  month(new Date(1953, 6, 5));

/*-----*/

//Reverse a sentence
/*
  Write a function reverseSentence(string) that takes a string of words and returns a string with the words in reverse order. If there is only one word in the string return it unchanged. Consider any series of non-space characters a word.

    Example:

    reverseSentence("The cat jumped over the dog.") // => "dog. the over jumped cat The"
    reverseSentence("Hello, world!") // => "world! Hello,"
*/

//CODE GOES HERE

/*-----*/


//Names of properties
/*
  Write a function nameProps(obj) that returns the names of the properties an object has in alphabetical order. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.

    Example:

    let friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }

    nameProps(friend) // => ['age', 'name', 'phone']
    nameProps({}) // => []

*/

//CODE GOES HERE

/*-----*/


module.exports = {month}
// module.exports = {month, reverseSentence, 
// nameProps}