import React, {Component} from 'react';
import {Text,View , AppRegistry,ListView, StyleSheet } from 'react-native';

const users = [
    {name:' Ali'},
    {name:' Ukasha'},
    {name:' ALi'},
    {name:' Moatasim'}
]

export default class no3 extends Component{
    constructor(){
         super();
         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         this.state = {
             userDataSource: ds.cloneWithRows(users),
         };
       }

       renderRow(user , sectionId,rowId,highlightRow){
           return(
                <View style={Styles.row}>
                    <Text style={Styles.rowText}>{user.name}</Text>
                </View>
           )
       }
    
render(){
  return(
    <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}
      />
  )
}
} 

const Styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding:10 ,
        backgroundColor:'#f4f4f4',
        margin: 3
    },
    rowText:{
        flex:10 ,
        borderLeftWidth : 1,
        borderRightWidth : 1,
        borderTopWidth : 1,
        borderBottomWidth : 1,
        backgroundColor :'#43f580'
    }
});
AppRegistry.registerComponent('no3',()=>no3);