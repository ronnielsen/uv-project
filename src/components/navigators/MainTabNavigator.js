import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Colors, Layout } from '../../constants';
import { AirScreen, UVScreen } from '../screens';
import TabBarIcon from '../icons/TabBarIcon';

const UVStack = createStackNavigator({
  UV: UVScreen,
});

UVStack.navigationOptions = {
  tabBarLabel: 'UV',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='sun'
    />
  ),
};

const AirStack = createStackNavigator({
  Air: AirScreen,
});

AirStack.navigationOptions = {
  tabBarLabel: 'Air',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='wind'
    />
  ),
};


export default createMaterialTopTabNavigator({
  UVStack,
  AirStack,
}, {
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      backgroundColor: 'transparent',
      color: 'white',
      marginLeft: Layout.window.width / 2 - 96,
      width: 192,
      position: 'absolute',
      bottom: 64
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
    lazy: true,
    tabBarComponent: props => {
      const backgroundColor = props.position.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ['orange', 'white', 'green'],
      })
      return (
        <TabBarBottom
          {...props}
          style={{ backgroundColor: backgroundColor }}
        />
      );
    },
  },
});
