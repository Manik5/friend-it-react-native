import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

import { useSelector } from 'react-redux';

import MapView from 'react-native-maps';


const FlatDetailScreen = props => {
  const flatId = props.navigation.getParam('flatId');
  const selectedFlat = useSelector(
    state => state.flats.availableFlats.find(
      flat => flat.id === flatId
    )
   );

  return (
    <ScrollView>
        <Image
          style={styles.image}
          source={{uri: selectedFlat.imageUrl}}
        />
        <View style={styles.container}>
          <Text style={styles.description}>{selectedFlat.description}</Text>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.price}>${selectedFlat.price}</Text>
          <Text style={styles.location}>{selectedFlat.location}</Text>
        </View>
        <Card>
          <Text style={styles.perk}>{selectedFlat.perk}</Text>
        </Card>
       <View style={styles.action}>
          <Button
            title="Book"
            type="outline"
            buttonStyle={{
              borderRadius: 20,
              width: 100
            }}
            onPress={() => {}}
          />
         <Button
          title="Swap"
          type="solid"
          buttonStyle={{
            borderRadius: 20,
            width: 100
          }}
          onPress={() => {}}
         />
       </View>
       <View>
         <MapView style={styles.mapStyle} />
       </View>
    </ScrollView>
  )
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
    marginTop: 20,
  },
  secondContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  location: {
    fontSize: 14,
    color: "#888",
  },
  action: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 20
  },
  mapStyle: {
    width: 400,
    height: 300,
  },
});

export default FlatDetailScreen;
