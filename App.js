import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import AllEvents from './src/AllEvents';
import Detail from './src/Detail';
import Maps from './src/Maps';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const Details = createStackNavigator({
  Details: {
    screen: Detail
  },
  Maps: {
    screen: Maps
  }
})

const Events = createStackNavigator({
  Event: {
    screen: AllEvents
  }
})

const BottomTabs = createBottomTabNavigator({
  Events: {
    screen: Events
  },
  Detail: {
    screen: Details
  }
})

export default createAppContainer(BottomTabs);