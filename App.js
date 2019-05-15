import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, Dimensions, KeyboardAvoidingView, Animated } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './src/redux';
import { Colors, Layout } from './src/constants';
import AppNavigator from './src/components/navigators';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const {height} = Dimensions.get('window')

export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
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
    let isLoading = !this.state.isLoadingComplete && !this.props.skipLoadingScreen;
    return (
      <Provider store={store}>
        <PersistGate loading={this.renderLoading()} persistor={persistor}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" backgroundColor={'transparent'}/>}
          {isLoading ? this.renderLoading() : (
            <View style={styles.page}>
              <View style={styles.container}>
                <AppNavigator />
              </View>
            </View>
          )}
        </PersistGate>
      </Provider>
    );
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
