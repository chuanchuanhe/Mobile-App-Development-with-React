//curl is an endpoint that runs on linux, manages the web request for u 
// curl https://catfact.ninja/fact (on terminal--displays the body, not the headers and stuffs)
//https://catfact.ninja/fact

//async functions javascript
const request = require('request')

var APP = {
    url:"https://catfact.ninja/fact",
    catfact:""
}

handleRequest = (err, response) =>{
    if (err){
        return console.log(err)
    }
    //console.log(response.headers) -> the response has some associated headers 
    //http protocols, type of connections..etc we won't worry about this in this class 
    APP.catfact = JSON.parse(response.body).fact 
    //the response has headers and stuffs, but we only want the body
    //after having JSON.parse(..).fact, we don;t have the full json, only the fact part
    console.log(APP.catfact) //now i'll get the catfact printed out 
}

request(APP.url, handleRequest)

console.log("Print CatFact" + APP.catfact) 
//-> no catfact printed out 
//why empty? -> the request library is designed to be async
//don't wnat to wait there while going back to the code before to retrieve info
//the request only calls the call back after web request is complete which takes some time 
