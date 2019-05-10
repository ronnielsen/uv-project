import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  Animated,
} from 'react-native';

import { Icon } from 'expo';

import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';

const width = Dimensions.get('window').width;

export default class Header extends React.Component {
  state = {
    backgroundColor: Colors.green,
    number: this.props.number,
    status: this.props.status,
    sub: this.props.sub,
  }

  render() {
    let { number, status, sub, backgroundColor } = this.state;
    return (
      <View style={styles.labelRow}>
        <MonoText style={styles.mega}>
          {number}
        </MonoText>
        <MonoText style={styles.status}>
          {status}
        </MonoText>
        <MonoText style={styles.sub}>
          {sub}
        </MonoText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mega: {
    fontSize: 160,
    color: Colors.white90,
    lineHeight: 192,
    height: 200,
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
