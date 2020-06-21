import React from 'react';
import { View, StyleSheet} from 'react-native';

import MapView from 'react-native-maps';

const MapComponent = props => {
  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.mapStyle} />
    </View>
  )
};

const styles = StyleSheet.create({
  mapContainer: {
    borderRadius: 40
  },
  mapStyle: {
    width: 400,
    height: 300,
  },
})

export default MapComponent;
