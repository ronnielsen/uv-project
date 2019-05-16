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

class AirInfoScreen extends React.Component {
  static navigationOptions = {
    header: <Header label="Air Quality" icon="x-circle" iconColor={Colors.black50} />,
    headerTransparent: true,
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
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.contentContainer}>
            <Text style={[{ color: this.getBackgroundColor() }, styles.mega ]}>
              {this.props.main.air}
            </Text>
            <View style={styles.labelRow}>
              <Text style={styles.label}>
                wear your
              </Text>
              <Text style={[{ color: this.getBackgroundColor()  }, styles.items ]}>
                gas mask,
              </Text>
              <Text style={[{ color: this.getBackgroundColor()  }, styles.items ]}>
                 and sunglasses
              </Text>
            </View>
            <View style={styles.labelRow}>
              <Text style={styles.label}>
                avoid
              </Text>
              <Text style={[{ color: this.getBackgroundColor()  }, styles.items ]}>
                 going outside,
              </Text>
              <Text style={[{ color: this.getBackgroundColor()  }, styles.items ]}>
                 and leaving windows open
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: Layout.window.height,
    width: Layout.window.width,
    backgroundColor: 'white',
  },
  scrollContainer: {
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  mega: {
    fontSize: 160,
    lineHeight: 192,
    height: 200,
    alignItems: 'center',
    fontFamily: 'plex-serif-bold',
  },
  labelRow: {
    marginBottom: 24,
  },
  label: {
    fontSize: 32,
    color: Colors.black90,
    lineHeight: 40,
    alignItems: 'center',
    fontFamily: 'plex-serif-bold'
  },
  items: {
      fontSize: 32,
      lineHeight: 40,
      fontFamily: 'plex-serif-bold'
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(AirInfoScreen)
