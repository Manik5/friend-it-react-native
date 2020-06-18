import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

import { useSelector } from 'react-redux';

// carousel
import Carousel from 'react-native-snap-carousel';

const FlatDetailScreen = props => {
  const flatId = props.navigation.getParam('flatId');
  const selectedFlat = useSelector(
    state => state.flats.availableFlats.find(
      flat => flat.id === flatId
    )
   );

  return (
    <ScrollView>
        <Image source={{uri: selectedFlat.imageUrl}} />
        <Text></Text>
        <Text></Text>
        <Text></Text>
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
    </ScrollView>
  )
}

FlatDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('flatTitle')
  }
}

const styles = StyleSheet.create({
  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default FlatDetailScreen;
