//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import data from '../db';
class AllEvents extends Component {

  state = {
    data: data
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{width:'100%'}}
          data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) => {
            return (
              // TouchableNativeFeedback is Android only
              <TouchableOpacity style={{shadowOpacity:0.5}} onPress={() => this.props.navigation.navigate('Details', {...item})}>
                {/* use elevation: 1 for android shadow */}
                {/* needed to add overflow:hidden to parent View of Image View in order to display borderBottomRadius */}
                <View style={{overflow:'hidden', marginVertical:20, marginHorizontal:15, borderRadius:15, backgroundColor:'#ced6eo'}}> 
                  <View style={{padding:15, backgroundColor:'#86dfe5', borderTopLeftRadius:15, borderTopRightRadius:15}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>{item.eventName}</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline'}}>
                      <View style={{flexDirection:'row', alignItems:'baseline'}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>Type</Text>
                        <Text>{item.genre}</Text>
                      </View>
                      <Text style={{fontSize:12, fontWeight:'bold'}}>{item.date}</Text>
                    </View>
                  </View>
                  <View>
                    <Image source={{uri:item.image}} style={{width:'100%', height:200, borderBottomLeftRadius:15, borderBottomRightRadius:15, flex:1, alignSelf:'stretch'}}></Image>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
          >
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
  },
});

export default AllEvents;
