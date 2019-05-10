import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Dimensions, Image } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import Colors from './constants/Colors';
import Search from './components/Search';
import { MonoText } from './components/StyledText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.page}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
            <Image
              source={require('./assets/images/wave.png')}
              style={styles.wave}
              pointerEvents="none"
            />
          </View>
          <Search />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/splash.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        ...Icon.Feather.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'plex-sans': require('./assets/fonts/IBMPlexSans-Regular.ttf'),
        'plex-sans-bold': require('./assets/fonts/IBMPlexSans-Bold.ttf'),
        'plex-serif': require('./assets/fonts/IBMPlexSerif-Regular.ttf'),
        'plex-serif-bold': require('./assets/fonts/IBMPlexSerif-Bold.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.green,
    paddingBottom: 96
  },
  wave: {
    resizeMode: 'stretch',
    height: height,
    width: width,
    position: 'absolute',
    top: 0,
  }
});
