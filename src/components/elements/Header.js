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

import { Colors, Layout } from '../../constants';

const width = Dimensions.get('window').width;

export default class Header extends React.Component {
  state = {
    label: 'UV Index',
  }

  render() {
    let { label } = this.state;
    return (
      <View style={styles.labelRow}>
        <Text style={styles.label}>
          {label}
        </Text>
        <Icon.Feather
          name='info'
          size={38}
          style={styles.info}
          color={this.props.focused ? Colors.white50 : Colors.white90}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    height: 40,
    width: 40,
    textAlign: 'center'
  },
  labelRow: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 18,
    color: Colors.black50,
    flex: 1,
  },
});
