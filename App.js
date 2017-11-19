import React, {Component} from 'react';
import {AppRegistry,Text,View, StyleSheet ,TouchableHighlight,TouchableOpacity} from 'react-native';

//import Component1 from './app/components/component1/Component1';
import Component2 from './app/components/component2/Component2';

export default class yes extends Component{
render(){
  return(
    <View> 
      <Component2 />
       </View>
  );
}
} AppRegistry.registerComponent('yes',()=>yes);