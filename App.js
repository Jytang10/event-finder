import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AllEvents from './src/AllEvents';
import Detail from './src/Detail';
import Maps from './src/Maps';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
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
    screen: Events,
    navigationOptions:({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="music" color={tintColor} size={20}></Icon>
      }
    })
  },
  Detail: {
    screen: Details,
    navigationOptions:({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="strikethrough" color={tintColor} size={20}></Icon>
      }
    })
  }
},{
  tabBarOptions: {
    activeTintColor:'#ff4757',
    inactiveTintColor:'black',
    labelStyle: {
      fontSize:13
    },
    style: {
      backgroundColor:'#86dfe5'
    }
  }
})

export default createAppContainer(createSwitchNavigator({
  Events: Events,
  AppStack: BottomTabs
}));