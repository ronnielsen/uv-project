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
import { Content, Header, UVInfoText } from '../elements';
import { Colors, Layout } from '../../constants';

class UVInfoScreen extends React.Component {
  static navigationOptions = {
    header: <Header label="UV Index" icon="x-circle" iconColor={Colors.black25} />,
    headerTransparent: true,
  };

  getBackgroundColor = () => {
    let { uv } = this.props.main;
    if (uv < 3) return Colors.green;
    if (uv < 6) return Colors.yellow;
    if (uv < 8) return Colors.orange;
    if (uv < 11) return Colors.red;
    return Colors.purple;
  }

  getStatus = () => {
    let { uv } = this.props.main;
    if (uv < 3) return 'Low';
    if (uv < 6) return 'Moderate';
    if (uv < 8) return 'High';
    if (uv < 11) return 'Very High';
    return 'Extreme';
  }

  getSub = () => {
    let { uv } = this.props.main;
    return "risk of sun exposure";
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.contentContainer}>
            <Text style={[{ color: this.getBackgroundColor() }, styles.mega ]}>
              {this.props.main.uv}
            </Text>
            <View style={styles.labelRow}>
              <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.label ]}>
                wear your
              </Text>
              <Text style={[{ color: this.getBackgroundColor() }, styles.items ]}>
                hat
              </Text>
              <Text style={[{ color: this.getBackgroundColor() }, styles.items ]}>
                sunglasses
              </Text>
              <Text style={[{ color: this.getBackgroundColor() }, styles.items ]}>
                sunblock
              </Text>
            </View>
            <View style={styles.labelRow}>
              <Text style={[{ fontFamily: 'plex-serif-bold' }, styles.label ]}>
                avoid sunlight
              </Text>
              <Text style={[{ color: this.getBackgroundColor() }, styles.items ]}>
                between 10am-4pm
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
    flex: 1
  },
  scrollContainer: {
  },
  contentContainer: {
    paddingHorizontal: 24,
    flex: 1,
  },
  mega: {
    fontSize: 160,
    lineHeight: 192,
    height: 200,
    alignItems: 'center',
    fontFamily: 'plex-serif-bold'
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

export default connect(mapStateToProps, mapDispatchToProps)(UVInfoScreen)
