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
    if (air < 2) return Colors.green;
    if (air < 5) return Colors.yellow;
    if (air < 8) return Colors.orange;
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
    paddingTop: 100
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
