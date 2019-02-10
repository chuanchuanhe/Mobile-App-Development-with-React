//DISTINCTION BETWEEN ELEMENTS AND COMPONENT
//->COMPONENTS ARE MADE UP OF ELEMENTS
//->COMPONENTS HAVE A RENDER LIFE CYCLE

//JSX elements can contain children 
const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
)

//JSX COMPILES TO REACT CREATE ELEMENT CALLS
const element = (
    <h1 className="greeting">
    Hello, world!
</h1> )
//compiles to this -> 
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
)
//which creates an object similar to this ->
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
}