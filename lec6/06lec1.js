//subsequent resolves and rejects are ignored once the resolve is filled
/*let promise = new Promise(function(resolve, reject){
    resolve("Stop Now!!")
    setTimeout(() => reject(new Error("Oh Noooo!")), 500); //ignored
    setTimeout(() => resolve("done!"), 500); //ignored 
}); 

//web request example
const request = require('request')
var APP = {
    url: "https://www.cs.virginia.edu/~dgg6b/samples/JSON.txt",
    webResponse: ""
}
options = {json: true}
let webRequest = new Promise(function(resolve, reject){
    handleRequest = (err, response) => {
        if (err) {reject(err)}
        resolve(body) //why error when compile ? 
    }
    request(APP.url, options, handleRequest)
});
webRequest.then(
    (result)=>console.log(result)
).catch((err)=>console.log(error))*/
const request = require('request')
var APP = {
    url: "https://www.cs.virginia.edu/~dgg6b/samples/JSON.txt",
    webResponse: ""
}
options = {json: true}

let webRequest = new Promise(function(resolve, reject) {
    handleRequest = (err, res, body) => {
    if (err) { reject(err)}
    APP.webResponse = body
    resolve(body)
    }
    request(APP.url, options, handleRequest);
    });

    webRequest.then(
        (result)=>{
        console.log(APP.webResponse)
        console.log(result)
        }
        ).catch(
        (error) => console.log(error)
        )
/*print out: 
{
    title: 'June Pod', 
    date: '20/12/2020'
    }
    
    {
    title: 'June Pod', 
    date: '20/12/2020'
    } */

//promises and chaining
chain = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
    }).then(function(result) {
    console.log("Level 1 result: "+ result)
    return result * 2;
    }).then(function(result) {
    console.log("Level 2 result: "+ result)
    return result * 2;
    }).then(function(result) {
    console.log("Level 3 result: "+ result)
    });
    /*
    print out:
    Level 1 result: 1
    Level 2 result: 2
    Level 3 result: 4
    */

