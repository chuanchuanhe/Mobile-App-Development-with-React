//cat fact
const request = require('request')

var url = "https://catfact.ninja/fact"

async function getCatFact(){
    let webRequest = new Promise(function(resolve, reject) {
    handleRequest = (err, response) => {
    if (err) { reject(err)}
    resolve(JSON.parse(response.body).fact)
    }
    request(url, handleRequest);
    })
    catFact = await webRequest
    console.log(catFact)
}
getCatFact()
/*
{ fact:
   'The life expectancy of cats has nearly doubled over the last fifty years.'}
*/

//imports and exports 
//The export keyword is used to export objects and primitives so that can be used by other programs. 
//There are two types of exports: named and default
//Named exports: You must used the same name as the object or primitive that is export.
//default export: You can import default exports with any name.
//YOU CAN HAVE MULTIPLE NAME EXPORTS IN A MODULE BUT ONLY ONE DEFAULT EXPORT
//see more example at the end of js lecture slide 