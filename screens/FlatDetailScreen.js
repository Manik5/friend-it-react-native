import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
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
        <Text style={styles.description}>{selectedFlat.description}</Text>
        <Text style={styles.price}>${selectedFlat.price}</Text>
        <Text style={styles.location}>{selectedFlat.location}</Text>
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
       <View style={styles.container}>
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
  image: {

  },
  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
  },
  mapStyle: {
    width: 400,
    height: 300,
  }
})

export default FlatDetailScreen;
