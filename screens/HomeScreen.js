import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { useSelector } from 'react-redux';

const HomeScreen = props => {
  const flats = useSelector(state => state.flats.availableFlats);
  return (
   <FlatList
    data={flats}
    keyExtractor={item => item.id}
    renderItem={
      itemData =>
        <Text>
          {itemData.item.title}
        </Text>
      }
   />
  )
};

HomeScreen.navigationOptions = {
  headerTitle: 'Home'
};

const styles = StyleSheet.create({

});

export default HomeScreen;
