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
import { connect } from 'react-redux';
import { Colors, Layout } from '../../constants';
const height = Layout.window.height;
const width = Layout.window.width;

class UVScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  getBackgroundColor = () => {
    let { uv } = this.props.main;
    if (uv < 2) return Colors.green;
    if (uv < 5) return Colors.yellow;
    if (uv < 8) return Colors.orange;
    return 'red';
  }

  getStatus = () => {
    let { uv } = this.props.main;
    if (uv < 2) return 'Low';
    if (uv < 5) return 'Moderate';
    if (uv < 8) return 'Dangerous';
    return 'Extreme';
  }

  getSub = () => {
    let { uv } = this.props.main;
    return "risk of sun exposure";
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={[styles.scrollContainer, { backgroundColor: this.getBackgroundColor() }]}
          contentContainerStyle={styles.contentContainer}>
          <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.mega ]}>
            {this.props.main.uv}
          </Text>
          <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.status ]}>
            {this.getStatus()}
          </Text>
          <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.sub ]}>
            {this.getSub()}
          </Text>
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

const mapStateToProps = (state) => {
  let { uv } = state.main
  return {
    main: { uv }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UVScreen)
