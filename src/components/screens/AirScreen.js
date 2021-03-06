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
import { SafeAreaView } from 'react-navigation';
import { Content, Header } from '../elements';
import { Colors, Layout } from '../../constants';

class AirScreen extends React.Component {
  static navigationOptions = {
    header: <Header label="Air Quality" icon="wind" buttonPress="AirInfo"/>,
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
    if (air < 150) return 'Bad';
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
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
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
  },
  contentContainer: {
    paddingHorizontal: 24,
    flex: 1,
    paddingTop: 64,
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
