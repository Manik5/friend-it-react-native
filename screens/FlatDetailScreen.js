import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

import { useSelector } from 'react-redux';

import ShiftTimingScreen from '../components/DatePicker';
import MapComponent from '../components/MapComponent';

import Colors from '../constants/color.constant';


const FlatDetailScreen = props => {
  const flatId = props.navigation.getParam('flatId');
  const selectedFlat = useSelector(
    state => state.flats.availableFlats.find(
      flat => flat.id === flatId
    )
   );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedFlat.imageUrl }} />
      <Image source={{ uri: selectedFlat.firstImage }} />
      <View style={styles.container}>
        <Text style={styles.description}>{selectedFlat.description}</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.price}>${selectedFlat.price}</Text>
        <Text style={styles.location}>{selectedFlat.location}</Text>
      </View>
      <Card
        containerStyle={{
          borderRadius: 20,
        }}
      >
        <Text style={styles.perk}>{selectedFlat.perk}</Text>
      </Card>
      <ShiftTimingScreen />
      <View style={styles.action}>
        <Button
          title="Book"
          type="outline"
          buttonStyle={{
            borderRadius: 20,
            width: 100,
          }}
          onPress={() => {}}
        />
        <Button
          title="Swap"
          type="solid"
          buttonStyle={{
            borderRadius: 20,
            width: 100,
          }}
          onPress={() => {}}
        />
      </View>
      <MapComponent />
    </ScrollView>
  );
}

FlatDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('flatTitle')
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20
  },
  image: {
    width: "100%",
    height: 300,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 30,
    fontFamily: 'open-sans',
    color: Colors.text
  },
  secondContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 30
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: 'open-sans',
    marginBottom: 20,
    marginTop: 20
  },
  location: {
    fontSize: 14,
    color: "#888",
    fontFamily: 'open-sans',
    marginBottom: 20,
    marginTop: 20
  },
  perk: {
    fontFamily: 'open-sans',
    color: Colors.primary
  },
  action: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    marginBottom: 30
  },
});

export default FlatDetailScreen;
