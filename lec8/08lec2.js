//make a clock 
//update clock every second 

function Clock(){
    let clockElement = (
        <div>
            <h1>This is a Clock</h1>
            <h1>The Time is Now : {new Date().toLocaleTimeString()}</h1> 
        </div>
    )
    return clockElement
}

function tick(){
    const element = (
        /*<div>
            <h1> Hello, World </h1>
            <h2> It is {new Date().toLocaleTimeString()} </h2>
        </div>*/
        <Clock></Clock> //can also use it like this 
        //<Clock/> or can do this 
    )
    ReactDOM.render(element,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)

/*
or can do arrow function:
const tick = ()=> {
    const element = (
        <Clock></Clock> //can also use it like this 
    )
    ReactDOM.render(element,
        document.getElementById('root')
    )
}
*/

//every second it is filing tick() function
//DOM is only updating in this section: new Date().toLocaleTimeString()
//virtual DOM compare to the physical DOM to see difference, and then update the difference
