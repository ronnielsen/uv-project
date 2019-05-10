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
  Dimensions,
  Animated,
} from 'react-native';

import { Icon } from 'expo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';

const width = Dimensions.get('window').width;

export default class Search extends React.Component {
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
    return (
      <View style={styles.search} >
        <Animated.View style={styles.searchRow}>
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
              this.props.handler(data.description)
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
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
    width: width,
    position: 'absolute',
    bottom: 0,
  },
  searchRow: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    height: 40,
    margin: 4,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
