import * as React from 'react'
import {View, StyleSheet} from'react-native';

//The way to do paddings 
export default class App extends React.Component {
  render() {
    return (//can only return one component, so need to wrap component in a component 
      <View>
        <View style={styles.bigBox}/>
        <View style={styles.littleBoxHolder}>
        <View style={styles.littleBox}/>
        </View>
      </View>
    );
  }
}

let styles = StyleSheeet.create(
{
  bigBox: {
    width: 300,
    height: 100,
    backgroundColor: "#DE0000",
  },
  littleBoxHolder: {
    padding: 100,
  }, 
  littleBox: {
    margin: 100,
    width: 100,
    height: 100,
    backgroundColor: "black",
  }
}
)

//how to do flex box 
//to let layout respond to screen of different sizes 
export default class App extends React.Component {
  render() {
    return (//can only return one component, so need to wrap component in a component 
      // flexDirection: row/column
      // justifyContent: space-between/flex-start/flex-end/space-evenly 
      //alignItems: drop items in the center 
      <View stule={{flex:1, flexDirection: 'row', justifyContent: 'space-beween', alignItems:'center'}}>
        <View style={[styles.littleBox,{backgroundColor:"red", flex:10}]}/> 
        <View style={[styles.littleBox,{backgroundColor:"blue", flex: 80}]}/>
        <View style={[styles.littleBox, {flex:10}]}/>
      </View>
    );
  }
}
//flex: 10 will take 10% of the screen, while flex: 80 will take 80% 
let styles = StyleSheeet.create(
{
  littleBox: {
    margin: 100,
    width: 100,
    height: 100,
    backgroundColor: "black",
  }
}
)

//Also we can do it like this:
//can substitute 'flex' part with flexGrow=0, flexShrink=0, flexBasis='auto' ???
//flex is a shorthand for three properties: flexGrow, flexShrink, flexBasis
