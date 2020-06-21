import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

import FlatCard from '../../components/FlatCard';

import { useSelector } from 'react-redux';

const YourFlatScreen = (props) => {
  const userFlats = useSelector(
    state => state.flats.userFlats
  )

  return (
    <FlatList
      data={userFlats}
      keyExtractor={item => item.id}
      renderItem={
        itemData => (
          <FlatCard
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            location={itemData.item.location}
            onViewDetail={() => {

            }}
          />
        )
      }
    />
  );
};



YourFlatScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your Flats",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default YourFlatScreen;
