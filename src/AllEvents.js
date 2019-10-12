//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import data from '../db';

// create a component
class AllEvents extends Component {

  state={
    data:data
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>AllEvents</Text>
        <Button title="Go to Detail" onPress={() => this.props.navigation.navigate('Detail')}></Button>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
});

//make this component available to the app
export default AllEvents;
