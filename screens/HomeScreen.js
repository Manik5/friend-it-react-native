import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { useSelector } from 'react-redux';

import FlatCard from '../components/FlatCard';


const HomeScreen = props => {
  const flats = useSelector(state => state.flats.availableFlats);
  return (
      <FlatList
       data={flats}
       keyExtractor={item => item.id}
       renderItem={
         itemData =>
          <FlatCard
            image={itemData.item.imageUrl}
            title={itemData.item.title}
						price={itemData.item.price}
						onViewDetail={() => {}}
          />
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
