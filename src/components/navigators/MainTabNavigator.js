import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { Colors, Layout } from '../../constants';
import { AirScreen, UVScreen, InfoScreen } from '../screens';
import TabBarIcon from '../icons/TabBarIcon';
import { fadeIn } from 'react-navigation-transitions';

const UVStack = createStackNavigator(
  {
    UV: {
      screen: UVScreen,
    },
    Info: {
      screen: InfoScreen
    },
  },
  {
    initialRouteName: 'UV',
    transitionConfig: () => fadeIn(),
  }
);

UVStack.navigationOptions = {
  tabBarLabel: 'UV',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='sun'
    />
  ),
};

const AirStack = createStackNavigator(
  {
    Air: {
      screen: AirScreen,
    },
    Info: {
      screen: InfoScreen
    },
  },
  {
    initialRouteName: 'Air',
    transitionConfig: () => fadeIn(),
  }
);

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
      bottom: 80
    },
    iconStyle: {
      height: 48,
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
