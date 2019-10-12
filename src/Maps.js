//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class Maps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={{latitude:27.7325, longitude: 85.32, latitudeDelta: 0.09, longitudeDelta: 0.092113}}>
          <Marker coordinate={{latitude:27.695499, longitude:85.315738}}></Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default Maps;
