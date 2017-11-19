import React, {Component} from 'react';
import { AppRegistry,Text,View , StyleSheet , TouchableHighlight,TouchableOpacity } from 'react-native';

export default class no1 extends Component{
  onPress(){
    console.log('AREA PRESSED');
  }
onPress2(){
  console.log('Waw TouchOpasity Pressed') ;
}
render(){
  return(
    <View>
          <View  style ={styles.myView}> 
            <Text style ={styles.myText}> THIS IS COMPONENT 2 </Text>  
              </View>
            <View style={styles.container}> 
                <TouchableHighlight 
                        style={styles.v1}
                        onPress={this.onPress}
                        underlayColor="yellow"
                        >
                        <View > 
                          <Text> View 1 </Text>
                        </View>
                </TouchableHighlight>
                <TouchableOpacity
                    onPress={this.onPress2}
                    style={styles.v2}
                    >
                        <View > 
                        <Text> View 2 </Text>
                        </View>
                </TouchableOpacity>
                      <View style={styles.v3}> 
                      <Text style={styles.t}> View 3 </Text>
                      </View>
            </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
myView : {
  backgroundColor : 'blue'
},
myText:{
  color: 'white'
},
container :{
  flexDirection : 'row',
  height:100
},
v1: {
  flex:1,
  backgroundColor:'cyan',
  padding:10

},
v2: {
  flex:1,
  backgroundColor:'green',
  padding:10
},
v3: {
  flex:1,
  backgroundColor:'red',
  padding:10
},
t:{
  color:'white'
}

});

AppRegistry.registerComponent('no1',()=> no1);