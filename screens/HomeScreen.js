import React from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';
import { Button } from 'react-native-elements';

import { useSelector } from 'react-redux';

import FlatCard from '../components/FlatCard';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import Colors from "../constants/color.constant";



const HomeScreen = props => {
	const flats = useSelector(state => state.flats.availableFlats);

	const selectItemHandler = (id, title) => {
		props.navigation.navigate("FlatDetail", {
      flatId: id,
      flatTitle: title,
    });
	}

  return (
    <View>
      <FlatList
        data={flats}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <FlatCard
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            location={itemData.item.location}
            onSelect={() => {
							selectItemHandler(itemData.item.id, itemData.item.title);
						}}
          >
            <Button
              title="View"
              type="outline"
              buttonStyle={{
                borderRadius: 20,
                backgroundColor: "white",
                width: 100,
              }}
              onPress={() => {
								selectItemHandler(itemData.item.id, itemData.item.title);
							}}
            />
          </FlatCard>
        )}
      />
    </View>
  );
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
