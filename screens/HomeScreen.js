import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    backgroundColor: Colors.red,
    number: 1
  }


  onChangeBackground = () => {
    this.setState({backgroundColor: 'white', number: 69});
  }

  render() {
    let { backgroundColor, number } = this.state;

    let scrollStyle = Object.assign({},styles.scrollContainer, { backgroundColor });
    return (
      <View style={styles.container}>

        <ScrollView style={scrollStyle} contentContainerStyle={styles.contentContainer}>
          <MonoText style={styles.mega}>
            {number}
          </MonoText>
        </ScrollView>

      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red,
  },
  scrollContainer: {
    backgroundColor: 'blue',
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  mega: {
    fontSize: 200,
    color: 'rgba(255,255,255,.85)',
  },
});
