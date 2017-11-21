import React, {Component} from 'react';
import {Text,View , AppRegistry } from 'react-native';

import Component5 from './app/components/component5/Component5';

export default class yes extends Component{
render(){
  return(
    <View> 
      <Component5 />
       </View>
  );
}
} AppRegistry.registerComponent('yes',()=>yes);