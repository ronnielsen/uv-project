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
  Animated,
} from 'react-native';
import { Icon } from 'expo';
import { Colors } from '../../constants';


export default class InfoText extends React.Component {
  state = {
    backgroundColor: Colors.green,
    number: this.props.number,
    status: this.props.status,
    sub: this.props.sub,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelRow}>
          <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.label ]}>
            wear your
          </Text>
          <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.items ]}>
            hat,
          </Text>
          <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.items ]}>
             sunglasses,
          </Text>
          <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.items ]}>
             and sunblock
          </Text>
        </View>
        <View style={styles.labelRow}>
          <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.label ]}>
            avoid sunlight
          </Text>
          <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.items ]}>
             between 10am-4pm
          </Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelRow: {
    marginBottom: 24,
  },
  label: {
    fontSize: 32,
    color: Colors.black90,
    lineHeight: 40,
    alignItems: 'center',
  },
  items: {
      fontSize: 32,
      color: Colors.red,
      lineHeight: 40,
  }
});
