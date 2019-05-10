import React from 'react';
import { Platform, View, Dimensions } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const width = Dimensions.get('window').width;

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Butt',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='sun'
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='wind'
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createMaterialTopTabNavigator({
  HomeStack,
  LinksStack,
}, {
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      backgroundColor: 'transparent',
      color: 'white',
      marginLeft: width / 2 - 96,
      width: 192,
    },
    iconStyle: {
      height: 64,
      width: 64,
    },
    indicatorStyle: {
      backgroundColor: 'white',
      height: 4,
    },
    tabStyle: {
      width: 96,
    },
    activeTintColor: 'white',
    showIcon: true,
    showLabel: false,
  },
});
