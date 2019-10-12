//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
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
