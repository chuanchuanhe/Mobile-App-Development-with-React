//PROMISES
//promises syntax
//the function passed to the promise must have two parameters which are special functional pointers

/*let promise = new Promise(function(resolve, reject){
    //executor 
});*/
//resolve called when the function successfully completes
//reject called if there is an error 
//resolve and reject are defined by JS engine 
//promises have two internal properties:
//State - initially “pending”, then changes to either “fulfilled” or “rejected”
//Result - an arbitrary value of your choosing,initially undefined.

let promise = new Promise(function(resolve, reject){
    //similar to throws 
    //first thing to file in our promise 
    //resolve("stop now") add this so resolve get hits first, then no error prints out
    setTimeout(() => reject(new Error("Oh NOOOOOO!")), 1500);
    //after 1s signal that the job is done with the result "done!"
    setTimeout(() => resolve("done!"), 1000);
}); 

//promise consumers
promise.then(
    //function(result){}, //handles result of resolve 
    //function(error){} //handles result of reject 
    (result) => console.log(result), //print out "done!" since it only akes 1 milisecs to file out first 
    (error) => console.log(error) 
)
//catch syntax 
/*promise.then(
    (result)=> console.log(result)
 ).catch(
    (error) => console.log(error)
 )
)*/