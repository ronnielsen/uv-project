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
    return "air qualuty";
  }


  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.getBackgroundColor() }]}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.contentContainer}>
          <Content
            title={this.props.main.air}
            status={this.getStatus()}
            sub={this.getSub()} />
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
  },
  contentContainer: {
    paddingHorizontal: 24,
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
