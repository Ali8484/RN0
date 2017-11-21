import React, {Component} from 'react';
import {Text,View , AppRegistry , ListView , StyleSheet } from 'react-native';


export default class no4 extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds,
        };
      }

      componentDidMount(){
          this.fetchUsers();
      }

      fetchUsers(){
          fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json() )
          .then((response) => {
              this.setState({
                  userDataSource: this.state.userDataSource.cloneWithRows(response)
              });
          });
      }

      renderRow(user , sectionId,rowId,highlightRow){
        return(
             <View style={Styles.row} >
                 <Text style={Styles.rowText}>{ user.name   } :  {user.address.street} </Text>
             </View>
        )
    }
            
        render(){
        return(
            <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}
        />
        );
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
AppRegistry.registerComponent('no4',()=>no4);