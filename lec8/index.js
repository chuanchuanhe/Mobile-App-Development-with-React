import React from 'react';
import ReactDOM from 'react-dom';
//make a clock 
//update clock every second 

//WHEN DEFINING FUNCTION COMPONENT MUST US CAPITAL
function Clock(props){
    let clockElement = (
        <div>
            <h1>This is a {props.type} Clock</h1>
            <h1>The Time is Now : {props.time}</h1> 
        </div>
    )
    return clockElement
}

function tick(){
    const element = (
        <div>
            <Clock type={"English"} time ={ new Date().toLocaleTimeString()} />
            <Clock type={"Arabic"} time ={ new Date().toLocaleTimeString('ar-EG')} />
        </div>
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

//COMPONENTS AND PROPERTIES
//WHAT IF WE HAD DIFFERENT TYPE OF CLOCKS
//HOW COULD WE CUSTOMIZE THEM
//THIS IS WHERE PROPERTIES COME IN
//see new code above !
//see better solution in 08lec2.js/08lec3.js !
//new syntax for components! see 08lec3.js : insert Kelvin 