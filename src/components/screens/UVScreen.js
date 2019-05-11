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

class UVScreen extends React.Component {
  static navigationOptions = {
    header: <Header label="UV Index" />,
    headerTransparent: true
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
      <View style={[styles.container, { backgroundColor: this.getBackgroundColor() }]}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.contentContainer}>
          <Content
            title={this.props.main.uv}
            status={this.getStatus()}
            sub={this.getSub()} />
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: Layout.window.height,
    width: Layout.window.width,
  },
  scrollContainer: {
  },
  contentContainer: {
    paddingHorizontal: 24,
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
