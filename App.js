import React, {Component} from 'react';
import {AppRegistry,Text,View, StyleSheet } from 'react-native';

//import Component1 from './app/components/component1/Component1';
import Component3 from './app/components/component3/Component3';

export default class yes extends Component{
render(){
  return(
    <View> 
      <Component3 />
       </View>
  );
}
} AppRegistry.registerComponent('yes',()=>yes);