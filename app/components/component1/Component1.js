import React, {Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';

export default class no extends Component{
constructor(props){
    super(props);
    this.state = {
      name : 'ALIIII',
      x : true ,
      message: this.props.message
    }

}
static defaultProps = {
  message: 'from props message '
}

render(){
  let z = this.state.x ? this.state.name : 'this.state.x' ;
  return(
    <View> 
      <Text> {this.state.message} </Text>
      <Text> {z} </Text>
       </View>
  );
}

} AppRegistry.registerComponent('no',()=> no );