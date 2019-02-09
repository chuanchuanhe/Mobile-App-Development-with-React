//first piece of react native code 
function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson.movies;
    })
    .catch((error) => {
        console.error(error);
    });
}

//async/await -> special syntax for promise 
async function simpleFunction() {
    return 1; //this does not return a promise but //equivalent to return Promise.resolve(1)
}
//Async keyword means that function returns a promise
simpleFunction().then((result)=>{
    console.log(result) //print out 1
    return 5
}).then((resolve)=>{
    console.log(resolve) //print out 5
})


