//Show a month
/*
  Write a function month(date) to find the month for a given Date object, returning the name of the month as a string ('January', 'February', 'March', 'April', 'May', ... etc).

    Example:

    let date = new Date(2017, 5, 19) // June 19, 2017
    month(date) // returns "June"

    let christmas = new Date(2017, 11, 25) // Dec 25, 2017
    month(christmas) // returns "December"

*/
const calendar = [
    {monthNumber: 1,
    monthName  : "January"},
    {monthNumber: 2,
    monthName  : "February"},
    {monthNumber: 3,
    monthName  : "March"},
    {monthNumber: 4,
    monthName  : "April"},
    {monthNumber: 5,
    monthName  : "May"},
    {monthNumber: 6,
    monthName  : "June"},
    {monthNumber: 7,
    monthName  : "July"},
    {monthNumber: 8,
    monthName  : "August"},
    {monthNumber: 9,
    monthName  : "September"},
    {monthNumber: 10,
    monthName  : "October"},
    {monthNumber: 11,
    monthName  : "November"},
    {monthNumber: 12,
    monthName  : "December"}
  ]

function month(date){
  // let dateInput = prompt("Please enter a date","mm/dd/yyyy");
    let dateInput = process.argv[2];
    console.log(dateInput);   //*****REMOVE FOR FINAL SUBMIT*****

  //split dateInput into array.
    dateInputArray = dateInput.split("/");
    console.log(dateInputArray);

  //extract month digits from dateInput
    let getMonth = function (dateInputArray) { 
    if (dateInputArray[0] >= 1 || dateInputArray[0] <= 12) {
    console.log('the month is ' + getMonth);  //*****REMOVE FOR FINAL SUBMIT*****
          return console.log('this is a valid month');
      }
      else {
          return false;
      }
    };
}

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


module.exports = {month, reverseSentence, 
nameProps}
