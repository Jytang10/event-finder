//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
        <Button title="Go to Map" onPress={() => this.props.navigation.navigate('Map')}></Button>
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
    backgroundColor: '#2c6e58',
  },
});

//make this component available to the app
export default Detail;
