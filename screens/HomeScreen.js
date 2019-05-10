import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';
import Header from '../components/Header';
import { MonoText } from '../components/StyledText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    backgroundColor: Colors.green,
    number: 2,
    status: 'Low',
    sub: 'risk of sun exposure',
    label: 'UV Index',
  }

  onChangeBackground = () => {
    this.setState({backgroundColor: 'white', number: 69});
  }

  render() {
    let { backgroundColor, number, status, sub,  label } = this.state;

    let scrollStyle = Object.assign({},styles.scrollContainer, { backgroundColor });
    return (
      <View style={styles.container}>
        <ScrollView style={scrollStyle} contentContainerStyle={styles.contentContainer}>
          <MonoText style={styles.mega}>
            {number}
          </MonoText>
          <MonoText style={styles.status}>
            {status}
          </MonoText>
          <MonoText style={styles.sub}>
            {sub}
          </MonoText>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
  },
  scrollContainer: {
    backgroundColor: 'blue',
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  mega: {
    fontSize: 160,
    color: Colors.white90,
    height: 176,
    alignItems: 'center',
  },
  status: {
    fontSize: 48,
    color: Colors.white90,
    height: 80,
    lineHeight: 80
  },
  sub: {
    fontSize: 48,
    color: Colors.black90,
    lineHeight: 56,
  },
});
