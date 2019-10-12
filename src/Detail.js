//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class Detail extends Component {
  render() {
    const map = <Icon style={{paddingRight:5}} name="map" color="black" size={20}></Icon>
    const phone = <Icon style={{paddingRight:5}} name="phone" color="black" size={20}></Icon>
    const params = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={{height:250, width:'100%', alignSelf:'stretch'}}>
          <Image resizeMode="contain" source={{uri: params.image}} style={{borderRadius:12, width:'100%', height:'100%', alignSelf:'stretch', flex:1}}></Image>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:8, alignItems:'baseline'}}>
          <View style={{flexDirection:'row', alignItems:'baseline'}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Type: </Text>
            <Text>{params.genre}</Text>
          </View>
          <Text style={{fontSize:16, fontWeight:'bold'}}>{params.date}</Text>
        </View>
        <View style={{marginTop:15, flexDirection:'row'}}>
          <View style={{marginRight:20}}>
            <TouchableOpacity style={{flexDirection:'row', padding:12, borderRadius:6, backgroundColor:'#86dfe6'}}>
              {map}
              <Text style={{color:'black', fontSize:19}}>Map</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginRight:20}}>
            <TouchableOpacity style={{flexDirection:'row', padding:12, borderRadius:6, backgroundColor:'#86dfe6'}}>
              {phone}
              <Text style={{color:'black', fontSize:19}}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Detail;
