import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import { Button } from 'react-native-elements';

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
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <FlatCard
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          location={itemData.item.location}
          onSelect={() => {}}
        >
          <View style={styles.action}>
            <Button
              title="Edit"
              type="outline"
              raised
              buttonStyle={{
                borderRadius: 20,
                backgroundColor: "white",
                width: 100,
              }}
              onPress={() => {}}
            />
            <Button
              title="Delete"
              type="solid"
              buttonStyle={{
                borderRadius: 20,
                width: 100,
                backgroundColor: "#d92027",
              }}
              onPress={() => {}}
            />
          </View>
        </FlatCard>
      )}
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
  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default YourFlatScreen;
