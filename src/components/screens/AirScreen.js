import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Colors, Layout } from '../../constants';

class AirScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  getBackgroundColor = () => {
    let { air } = this.props.main;
    if (air < 2) return 'blue';
    if (air < 5) return 'green';
    if (air < 8) return 'orange';
    return 'red';
  }

  getStatus = () => {
    let { air } = this.props.main;
    if (air < 2) return 'Low';
    if (air < 5) return 'Moderate';
    if (air < 8) return 'Dangerous';
    return 'Extreme';
  }

  getSub = () => {
    let { air } = this.props.main;
    return "risk of sun exposure";
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={[styles.scrollContainer, { backgroundColor: this.getBackgroundColor() }]}
          contentContainerStyle={styles.contentContainer}>
          <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.mega ]}>
            {this.props.main.air}
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
    height: Layout.window.height,
    width: Layout.window.width,
  },
  scrollContainer: {
    backgroundColor: 'blue',
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  mega: {
    fontSize: 180,
    height: 240,
    color: Colors.white90,
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
  let { air } = state.main
  return {
    main: { air }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AirScreen)
