//more complicated example
//Login example: 
//Login (if successful get a token)
//to get access for all subsequent request u need that token 
//https://reqres.in/

//on the terminal 
//curl -X POST -H "Content-Type: application/json" -d
//"{ \"email\": \"peter@klaven\", \"password\":
//\"cityslicka\" }" https://reqres.in/api/login 
//-> {"token":"QpwL5tke4Pnpja7X"}

const request = require('request')

var APP = {
    url:"https://reqres.in/api/login",
    token:""
}

var options = {
    uri: APP.url,
    method: 'POST', 
    //http protocols supports different methods
    //the three methods that need to know for this class:
    //POST: to post some data to the web server and get sth back: in this case get back the token
    //GET: to get some objects from the web server
    //PUT: to put some info to the server 
    json: {
        email: "peter@klaven",
        password: "cityslicka"
    }
}
handleRequest = (err, response) =>{
    if (err){
        return console.log(err)
    }

    APP.token = response.body.token 
    console.log(APP.token)  //print out:QpwL5tke4Pnpja7X
    //pyramid of doom
    //option one: request inside a request
    /*handleRequest2 = (err, response) =>  {
        if (err) {
            return console.log(err)
        }
    }
    request(options2, handleRequest2)*/
    //Option two: put the handleRequest2 outside, more maintainable
    //instead of stacking nested, to have cleaner syntax
}
request(options, handleRequest)
console.log("Print Token " + APP.token)

//how do I handle multiple request? To access other servers 
//after I get my token?
//->one way: Pyramid of doom -> request inside a request 

//Option two: put the handleRequest2 outside, more maintainable
//instead of stacking nested, to have cleaner syntax

handleRequest2 = (err, body) => {
    if (err) {
        return console.log(err)
    }
    console.log("second request")
}
handleRequest = (err, body) => {
    if (err) {
        return console.log(err)
    }
    APP.webResponse = body.response
    console.log("Got the response" + APP.webResponse)
    request(APP.url, options, handleRequest2);
}

request(APP.url, handleRequest);
console.log("The Request Body" + body)