//REACT and JSX

//document object model (DOM)
//Virtual DOM
//Virtual DOM life cycle methods: shouldComponentUpdate & componentDidMount
/*
HOOKS INTO A COMPONENTS LIFE CYCLE 

->shouldComponentUpdate allows the developer to
prevent unnecessary re-rendering of a component by
returning false if a render is not required. 

->componentDidMount is called once the component
has 'mounted' (the component has been created in
the user interface, often by associating it with a DOM
node). This is commonly used to trigger data loading
from a remote source via an API.

componentWillUnmount is called immediately before
the component is tore down or ‘unmounted'.

render is the most important lifecycle method and the
only required one in any component. It is usually called
every time the component's state is updated,
reflecting changes in the user interface.
*/

/*
COMPONENT LIFE CYCLE
constructor()->componentWillMount()->render()-><-componetDidMount()
*/
 /*
 setting up
 npm install -g create-react-app
 create-react-app my-app
 cd my-app
 npm start 
 */
