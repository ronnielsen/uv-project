import React from 'react';
import { Platform, View, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, SafeAreaView} from 'react-navigation';
// import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { Colors, Layout } from '../../constants';
import { AirScreen, UVScreen, AirInfoScreen, UVInfoScreen } from '../screens';
import TabBarIcon from '../icons/TabBarIcon';
import { fadeIn } from 'react-navigation-transitions';
import LocationForm from '../forms/LocationForm';

const UVStack = createStackNavigator(
  {
    UV: {
      screen: UVScreen,
    }
  },
  {
    initialRouteName: 'UV',
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
    }
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

let TabNavigator = createMaterialTopTabNavigator({
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

class HomeNavigator extends React.Component {
  static router = TabNavigator.router;
  static navigationOptions = {
    header: null,
    headerTransparent: true,
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1}}>
        <TabNavigator navigation={navigation} />
        <Image
          source={require('../../../assets/images/wave.png')}
          style={styles.wave}
          pointerEvents="none"
        ></Image>
        <SafeAreaView><LocationForm /></SafeAreaView>
      </View>
    )
  }
}

export default createStackNavigator(
  {
    Home: HomeNavigator,
    UVInfo: UVInfoScreen,
    AirInfo: AirInfoScreen
  },
  {
    headerMode: 'screen',
    transitionConfig: () => fadeIn(),

  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wave: {
    resizeMode: 'stretch',
    height: Layout.window.height,
    width: Layout.window.width,
    position: 'absolute',
    top: 0,
  }
});
