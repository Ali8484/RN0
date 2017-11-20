import React, {Component} from 'react';
import {Text,View , AppRegistry } from 'react-native';

//import Component1 from './app/components/component1/Component1';
import Component4 from './app/components/component4/Component4';

export default class yes extends Component{
render(){
  return(
    <View> 
      <Component4 />
       </View>
  );
}
} AppRegistry.registerComponent('yes',()=>yes);