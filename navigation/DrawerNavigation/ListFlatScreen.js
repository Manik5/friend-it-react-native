import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";


const ListFlatScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is the ListFlatScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

ListFlatScreen.navigationOptions = navData => {
  return {
    headerTitle: "Upload Your Flat",
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

export default ListFlatScreen;
