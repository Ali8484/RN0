import React, {Component} from 'react';
import {AppRegistry,Text,View, TextInput} from 'react-native';


export default class no2 extends Component{
    constructor (){
    super();
    this.state = {
        textValue:'Hello'
    }

    }

    onChangeText(value){
            this.setState({
            textValue:value
        });
    }

    onSubmit(){
        console.log('Input Submitted ... ');
    }

render(){
  return(
    <View> 
      < TextInput
           placeholder="Enter Text"
           value={this.state.textValue}
           onChangeText={(value) => this.onChangeText(value) }
           onSubmitEditing={this.onSubmit}
         />
         <Text>{this.state.textValue}</Text>
       </View>
  );
}
} AppRegistry.registerComponent('no2',()=>no2);