import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Card, Button } from 'react-native-elements';

import { useSelector } from 'react-redux';

// carousel

const FlatDetailScreen = props => {
  const flatId = props.navigation.getParam('flatId');
  const selectedFlat = useSelector(
    state => state.flats.availableFlats.find(
      flat => flat.id === flatId
    )
   );


  return (
   <View>
     <Text>
      {selectedFlat.title}
     </Text>
   </View>
  )
}

FlatDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('flatTitle')
  }
}

const styles = StyleSheet.create({

})

export default FlatDetailScreen;
