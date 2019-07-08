import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, Dimensions, KeyboardAvoidingView, Animated } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './src/redux';
import { Colors, Layout } from './src/constants';
import AppNavigator from './src/components/navigators';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
=======
import AppNavigator from './navigation/AppNavigator';
import Colors from './constants/Colors';
import Search from './components/Search';
import Header from './components/Header';
import { MonoText } from './components/StyledText';
>>>>>>> ed1e301be795cb464dadd28a5ce5809f46ee1167

const {height} = Dimensions.get('window')

export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
    backgroundColor: Colors.green,
  };

  componentWillUnmount() {
    this._animatedValue.resetAnimation()
  }

  renderLoading() {
    return (
      <AppLoading
        startAsync={this._loadResourcesAsync}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}
      />
    );
  }

  render() {
    let { backgroundColor } = this.state;
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
            <Header />
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
    flex: 1
  },
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
