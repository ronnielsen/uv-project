import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Animated,
  KeyboardAvoidingView,
} from 'react-native';
import { Icon } from 'expo';
import { connect } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors, Layout } from '../../constants';
import { MainActions } from '../../redux/actions';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class LocationForm extends React.Component {
  static defaultProps = {
    draggableRange: {
      top: 600,
      bottom: 72
    }
  }

  _draggedValue = new Animated.Value(72);

  state = {
    text: 'San Jose, CA',
    searchHeight: 96,
  }

  componentOnChange() {
    Animated.timing(                  // Animate over time
      this.state.searchHeight,            // The animated value to drive
      {
        toValue: 200,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    const {top, bottom} = this.props.draggableRange

    let { setLocation } = this.props;
    return (
      <SlidingUpPanel
        ref={c => (this._panel = c)}
        draggableRange={this.props.draggableRange}
        animatedValue={this._draggedValue}
        snappingPoints={[600, 72]}
        >
        <View style={styles.search}>
          <View style={styles.line}></View>
          <View style={styles.searchRow} >
            <GooglePlacesAutocomplete
              placeholder={this.state.text}
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={"search"}
              listViewDisplayed="true"
              fetchDetails={true}
              renderDescription={row =>
                row.description || row.formatted_address || row.name
              }
              onPress={(data, details = null) => {
                console.log(data);
                console.log(details);
                setLocation(data.description);
                _draggedValue = new Animated.Value(72)
              }}
              getDefaultValue={() => {
                return ""; // text input default value
              }}
              query={{
                key: 'AIzaSyA44NUmGHqIh8UQewJurulKlV3ZcLh5ETM',
                language: "en", // language of the results
                types: "(cities)" // default: 'geocode'
              }}
              styles={{
                description: {
                  height: 64,
                  color: Colors.black90,
                  fontSize: 20,
                  fontFamily: 'plex-sans',
                },
                row: {
                  height: 56
                },
                textInputContainer: {
                  backgroundColor: 'white',
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  height: 40,
                },
                textInput: {
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  height: 40,
                  backgroundColor: 'white',
                  color: Colors.black90,
                  fontSize: 20,
                  fontFamily: 'plex-sans',
                  paddingLeft: 0,
                },
              }}
              textInputProps={{
                onFocus: () => {
                  console.log('FOCUS!!!!!!!!!!')
                  setTimeout(() => {this._panel.show()}, 50);
                },
                onBlur: () => {
                  console.log('BLUR!!!!!!!!')
                  this._panel.hide()
                }
              }}
              enablePoweredByContainer={false}
              nearbyPlacesAPI="GoogleReverseGeocoding"
              GooglePlacesSearchQuery={{
                rankby: "name",
              }}
              filterReverseGeocodingByTypes={[
                "locality",
                "administrative_area_level_3"
              ]}
              debounce={0}
              renderLeftButton={()  => <Icon.Ionicons
                name='ios-search'
                size={32}
                style={styles.icon}
                color={this.props.focused ? Colors.black90 : Colors.black50}
              />}
              renderRightButton={()  => <Icon.Ionicons
                name='ios-navigate'
                size={40}
                style={styles.locIcon}
                color={this.props.focused ? Colors.blue : Colors.blue}
              />}
            />
          </View>
        </View>
      </SlidingUpPanel>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
    width: Layout.window.width,
    paddingTop: 8,
    backgroundColor: 'white',
    height: 600,
  },
  searchRow: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  icon: {
    height: 40,
    margin: 4,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: 4,
    backgroundColor: 'rgba(0,0,0,.10)',
    justifyContent: 'center',
    width: 120,
    borderRadius: 16,
    marginBottom: 8,
    alignSelf: 'center'
  },
  locIcon: {
    height: 40,
    margin: 0,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapStateToProps = (state) => {
  let { location, uv, air } = state.main
  return {
    main: { location, uv, air }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => dispatch(MainActions.setLocation(location)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm)
