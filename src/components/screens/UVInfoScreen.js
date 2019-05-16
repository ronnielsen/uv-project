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
    header: <Header label="" icon="x-circle" iconColor={Colors.red} />,
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
            <UVInfoText />
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
    paddingTop: 10,
    backgroundColor: 'white',
  },
  scrollContainer: {
  },
  contentContainer: {
    paddingHorizontal: 24,
    flex: 1,
  },
  status: {
    fontSize: 48,
    lineHeight: 192,
    height: 200,
    alignItems: 'center',
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
