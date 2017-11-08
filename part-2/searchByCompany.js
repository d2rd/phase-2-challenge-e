// 1. Get required resources
const fs = require('fs'); //requires the node 'fs' library.
const clientData = require('/Users/d2rd/Users/d2rd/lgProjects-local/lg-2/phase-2/phase-2-challenge-e/part-2/clients.json');
var targetCompany = process.argv[2]; 

// 2. load the clients.json file into the var 'clientData' (using absolute path).
const clientArray = JSON.parse(fs.readFileSync('/Users/d2rd/Users/d2rd/lgProjects-local/lg-2/phase-2/phase-2-challenge-e/part-2/clients.json', 'utf8')); 


// 3. Declare helper function 'byCompany' to match search parameter 'targetCompany' to array values.
// Attribution for helper function:  https://www.youtube.com/watch?v=q_MXH_Ponpg
    function byCompany(clientObj, index, clientData) { 
        // console.log(clientObj + " in clientObj");   
      if (clientObj.company.toLowerCase() == targetCompany.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }

    var companiesFound = clientArray.filter(byCompany); // NOTE: byCompany IS the callback.  runs filter method against new array 'companiesFound' containing matches output by 'byCompany' helper function.

console.log("Finding clients with company beginning with \'" + targetCompany + "\'.");

// console.log(JSON.parse(companiesFound));  // converts JSON string to object.

console.log(companiesFound + " in companiesFound"); // print all the values of companiesFound

for (i in companiesFound){
    // console.log(i + " in 'i'");
    for (key in companiesFound[i]){
     var badKeys = [
      "rep_name",
      "city",
      "state"
      "no_employees"
      "created_at"
    ]
    if (badKeys.indexOf(key) == -1){
        console.log( key + ": " + companiesFound[i][key] + "\n");
    }
    }        
}
   
// Exclude these values on these keys (list under badKeys):
  // "rep_name",
  // "city",
  // "state"
  // "no_employees"
  // "created_at"

// Include these values of each matching car (automatically included):
  // `id`
  // 'company',
  //  'phone',
