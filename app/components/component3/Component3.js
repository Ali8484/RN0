import React, {Component} from 'react';
import {AppRegistry,Text,View, TextInput , Switch } from 'react-native';


export default class no2 extends Component{
    constructor (){
    super();
    this.state = {
        textValue:'Hello' ,
        switchVlaue: false
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

    onSwitchChange(value){
        this.setState({
           switchVlaue:value
        });

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
         <Switch 
                value ={this.state.switchVlaue}
                onValueChange={(value) => this.onSwitchChange(value)}
         />
       </View>
  );
}
} AppRegistry.registerComponent('no2',()=>no2);