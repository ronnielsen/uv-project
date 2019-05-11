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
import { Content, Header } from '../elements';
import { Colors, Layout } from '../../constants';

class AirScreen extends React.Component {
  static navigationOptions = {
    header: <Header label="Air Quality" />,
    headerTransparent: true
  };

  getBackgroundColor = () => {
    let { air } = this.props.main;
    if (air < 50) return Colors.green;
    if (air < 100) return Colors.yellow;
    if (air < 150) return Colors.orange;
    if (air < 200) return Colors.red;
    if (air < 300) return Colors.purple;
    return Colors.maroon;
  }

  getStatus = () => {
    let { air } = this.props.main;
    if (air < 50) return 'Good';
    if (air < 100) return 'Moderate';
    if (air < 150) return 'Unhealthy if Sensitive';
    if (air < 200) return 'Unhealthy';
    if (air < 300) return 'Very Unhealthy';
    return 'Hazardous';
  }

  getSub = () => {
    let { air } = this.props.main;
    return "air quality";
  }


  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.getBackgroundColor() }]}>
        <ScrollView
          style={styles.scrollContainer}
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
    paddingTop: 80
  },
  scrollContainer: {
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
    lineHeight: 64,
    marginBottom: 16,
  },
  sub: {
    fontSize: 48,
    color: Colors.black90,
    lineHeight: 56,
  },
  wave: {
    resizeMode: 'stretch',
    height: Layout.window.height,
    width: Layout.window.width,
    position: 'absolute',
    top: 0,
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
