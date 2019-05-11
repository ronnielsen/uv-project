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

class LocationForm extends React.Component {
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
    let { setLocation } = this.props;
    return (
      <View style={styles.search} onPress={() => this.swipeUpDownRef.showFull()}>
        <View style={styles.line}></View>
        <View style={styles.searchRow}>
          <GooglePlacesAutocomplete
            placeholder={this.state.text}
            minLength={3} // minimum length of text to search
            autoFocus={false}
            returnKeyType={"search"}
            listViewDisplayed="true"
            fetchDetails={true}
            renderDescription={row =>
              row.description || row.formatted_address || row.name
            }
            onPress={(data, details = null) => {
              // this.props.handler(data.description)
              console.log(data);
              console.log(details);
              setLocation(data.description);
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
                height: 40,
                color: Colors.black90,
                fontSize: 20,
                fontFamily: 'plex-sans',
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
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GoogleReverseGeocoding"
            GooglePlacesSearchQuery={{
              rankby: "name",
            }}
            filterReverseGeocodingByTypes={[
              "locality",
              "administrative_area_level_3"
            ]}
            debounce={100}
            renderLeftButton={()  => <Icon.Feather
              name='search'
              size={32}
              style={styles.icon}
              color={this.props.focused ? Colors.black90 : Colors.black50}
            />}
          />
        </View>
      </View>
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
