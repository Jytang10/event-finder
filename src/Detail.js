//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

class Detail extends Component {
  render() {
    const params = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={{height:250, width:'100%', alignSelf:'stretch'}}>
          <Image resizeMode="contain" source={{uri: params.image}} style={{borderRadius:12, width:'100%', height:'100%', alignSelf:'stretch', flex:1}}></Image>
        </View>
        <View>
          <View style={{flexDirection:'row', marginTop:8, alignItems:'baseline'}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Type</Text>
            <Text>{params.genre}</Text>
          </View>
          <Text style={{fontSize:16, fontWeight:'bold'}}>{params.date}</Text>
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
