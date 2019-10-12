//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Detail extends Component {
  render() {
    const params = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text>{params.eventName}</Text>
        <Text>{params.date}</Text>
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
