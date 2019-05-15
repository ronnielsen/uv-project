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

class InfoScreen extends React.Component {
  static navigationOptions = {
    header: <Header label="Info Page" icon="x-circle" iconColor="pink" />,
    headerTransparent: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.contentContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.infoButton}
              >
              <Text>Back</Text>
            </TouchableOpacity>
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
    paddingTop: 80,
    backgroundColor: 'white',
    zIndex: 1000,
  },
  scrollContainer: {
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  mega: {
    fontSize: 48,
    color: Colors.black90,
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
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoScreen)
