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
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Content, Header } from '../elements';
import { Colors, Layout } from '../../constants';

class UVScreen extends React.Component {
  static navigationOptions = {
    header: <Header label="UV Index" icon="info" buttonPress="Info"/>,
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
      <View style={[styles.container, { backgroundColor: this.getBackgroundColor() }]}>
        <SafeAreaView>
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.contentContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Info')}
                style={styles.infoButton}
                >
                <Text>toInfo</Text>
              </TouchableOpacity>
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
  infoButton: {
    height: 40,
    width: 300,
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
