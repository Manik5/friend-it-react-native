import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";


const YourFlatScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is the YourFlatScreen</Text>
    </View>
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
