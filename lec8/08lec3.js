//better solution for different clocks

/** function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}**/
//this is equivalent ot this:
class Welcome extends React.Component {
    render() {
    return <h1>Hello, {this.props.name}</h1>;
    }
}//then nest it inside const element 

function Clock(props){
    let clockElement = (
        <div>
            <h1>This is a {props.type} Clock</h1>
            <h1>The Time is Now : {new Date().toLocaleTimeString(props.time)}</h1> 
        </div>
    )
    return clockElement
}

function tick(){
    const element = (
        <div>
            <Welcome name={"Kelvin"}></Welcome>
            <Clock type={"English"} time ={"en-US"} />
            <Clock type={"Arabic"} time ={"ar-EG"} />
        </div>
    )
    ReactDOM.render(element,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)

//PROPERTIES ARE READ ONLY
//components must be pure function

//Pure function does not modify its parameters
function sum(a, b) {
    return a + b;
}
////Not a pure function because it modifies its parameters
function withdraw(account, amount) {
    account.total -= amount;
}
//THIS MEANS THAT COMPONENTS CAN NOT MODIFY THEIR PROPERTIES
//CAN’T OVERRIDE PROPERTIES
function Clock(props) {
    props.type = "Override"
    let clockElement = <div>
    <h1>This is a { props.type} Clock</h1>
    <h1>The Time is Now : {props.time}</h1>
    </div>
    return clockElement
    } //-> will give an error 