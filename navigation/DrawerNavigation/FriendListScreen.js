import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";


const FriendListScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is the FriendListScreen</Text>
    </View>
  );
};

FriendListScreen.navigationOptions = navData => {
  return {
    headerTitle: "Friend List",
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

export default FriendListScreen;
