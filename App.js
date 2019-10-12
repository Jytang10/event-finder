import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
  Map: {
    screen: Maps
  }
},{
  headerMode: 'none'
});

const Events = createStackNavigator({
  Event: {
    screen: AllEvents
  }
},{
  headerLayoutPreset:'center',
  defaultNavigationOptions: () => ({
    headerTitle: <Image style={{width:180, height:180}} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/eve.png?alt=media&token=004e2c4e-9000-4ec4-a82f-866b71f3bd60'}}></Image>
  })
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