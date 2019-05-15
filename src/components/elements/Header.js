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
  Navigator,
} from 'react-native';
import { Icon } from 'expo';
import { Colors, Layout } from '../../constants';

export default class Header extends React.Component {
  render() {
    let { label, icon, iconColor } = this.props;
    iconColor = this.props.iconColor ? iconColor : 'white'
    return (
      <View style={styles.labelRow}>
        <Text style={styles.label}>
          {label}
        </Text>
        <TouchableOpacity
          onPress={() => console.log('Info Button Pressed')}
          style={styles.infoButton}
          >
          <Icon.Feather
            name={icon}
            size={38}
            style={styles.info}
            color={this.props.focused ? iconColor : iconColor}
          />
        </TouchableOpacity>
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
    marginTop: 24,
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 18,
    color: Colors.black50,
    flex: 1,
    fontFamily: 'plex-serif-bold',
  },
});
