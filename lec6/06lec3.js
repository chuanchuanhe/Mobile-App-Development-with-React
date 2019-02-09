//await keyword
async function simpleFunction() {
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise Complete!"), 1000)
    })
   
    let result = await promise // wait till the promise resolves
   
    console.log(result) // “Promise Complete!”
    return promise //then it prints out "Promise Complete!"
}
//console.log(simpleFunction()); //print out promise object: Promise { <pending> }
simpleFunction().then((result)=>{
    console.log("Then function Fired with result: "
    + result + " ")  //state: fulfilled; result: Promise Complete
    }
)
//THIS PRINTS UNDEFINED BECAUSE DEFAULT PROMISE IS
//RETURNED WITH AN EMPTY RESULT (didn't return anything)

/*
function badFunction() {
 let promise = Promise.resolve(1);
 let result = await promise; // Syntax error
 }
 throw aabout error! MISSING ASYNC KEYWORD
*/

