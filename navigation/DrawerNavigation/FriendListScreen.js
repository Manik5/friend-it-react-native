import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FriendListScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is the FriendListScreen</Text>
    </View>
  );
};

FriendListScreen.navigationOptions = {
	headerTitle: 'Friend List'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FriendListScreen;
