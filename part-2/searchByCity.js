// 1. Get required resources
const fs = require('fs'); //requires the node 'fs' library.
const clientData = require('/Users/d2rd/Users/d2rd/lgProjects-local/lg-2/phase-2/phase-2-challenge-d/part-2/clients.json');
var targetCity = process.argv[2]; 

// 2. load the clients.json file into the var 'clientData' (using absolute path).
const clientArray = JSON.parse(fs.readFileSync('/Users/d2rd/Users/d2rd/lgProjects-local/lg-2/phase-2/phase-2-challenge-d/part-2/clients.json', 'utf8')); 


// 3. Declare helper function 'byCity' to match search parameter 'targetCity' to array values.
// Attribution for helper function:  https://www.youtube.com/watch?v=q_MXH_Ponpg
    function byCity(clientObj, index, clientData) { 
        // console.log(clientObj + " in clientObj");   
      if (clientObj.city.toLowerCase() == targetCity.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }

    var citiesFound = clientArray.filter(byCity); // NOTE: byCity IS the callback.  runs filter method against new array 'citiesFound' containing matches output by 'byCity' helper function.

console.log("Finding clients with City beginning with \'" + targetCity + "\'.");

// console.log(JSON.parse(citiesFound));  // converts JSON string to object.

console.log(citiesFound + " in citiesFound"); // print all the values of citiesFound

for (i in citiesFound){
    // console.log(i + " in 'i'");
    for (key in citiesFound[i]){
     var badKeys = [
        "no_employees"
        "phone",
        "created_at"
        
    ]
    if (badKeys.indexOf(key) == -1){
        console.log( key + ": " + citiesFound[i][key] + "\n");
    }
    }        
}

// Exclude these values on these keys (list under badKeys):
    // "no_employees"
    // "phone",
    // "created_at"

// Include these values of each matching client (automatically included):
    // "id": 3,
    // "rep_name": "Ronnie Benasik",
    // "company": "Abbott-Bins",
    // "city": "Boston",
    // "state": "Massachusetts"