import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import AllEvents from './src/AllEvents';
import { createAppContainer } from 'react-navigation';

const Events = createStackNavigator({
  Event:{
    screen: AllEvents
  }
})

export default createAppContainer(Events);