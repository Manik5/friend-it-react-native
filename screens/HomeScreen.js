import React from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';

import { useSelector } from 'react-redux';

import FlatCard from '../components/FlatCard';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import SearchBar from '../components/SearchBar';

import { Ionicons } from '@expo/vector-icons';


const HomeScreen = props => {
  const flats = useSelector(state => state.flats.availableFlats);
  return (
		<View>
      <FlatList
       data={flats}
       keyExtractor={item => item.id}
       renderItem={
				 itemData =>
				 <FlatCard
				 image={itemData.item.imageUrl}
				 title={itemData.item.title}
				 price={itemData.item.price}
				 location={itemData.item.location}
				 onViewDetail={() => {
					 props.navigation.navigate(
						 'FlatDetail',
						 {
							 flatId: itemData.item.id,
							 flatTitle: itemData.item.title
							}
							)
            }}
						/>
					}
      />
		</View>
  )
};

HomeScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Home',
    headerLeft: () => (
      <HeaderButtons
         HeaderButtonComponent={HeaderButton}
      >
      <Item title='Menu'
      iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
      onPress={() => {
        navData.navigation.toggleDrawer()
      }}
      />
     </HeaderButtons>
    )
   }
 }

const styles = StyleSheet.create({

});

export default HomeScreen;
