import React, {Component} from 'react';
import {Text,View , AppRegistry  } from 'react-native';
import  AsyncStorage from "react-native";

import Component5 from './app/components/component5/Component5';
import Component6 from './app/components/component6/Component6';

export default class yes extends Component{
  renderScene(route , navigator){
     switch(route.id){
       case 'component5':
        return(<Component5 navigator={navigator} title="component5" />)
        case 'component6':
         return(<Component6 navigator={navigator} title="component6" />)
     }
   }
render(){
  return(
  //  <View>
    //  <Component5 />
   //  </View>
   <Navigator
   initialRoute={{id: 'component5'}}
    renderScene={this.renderScene}
      configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
  );
   }
 }
AppRegistry.registerComponent('yes',()=>yes);