import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MessagesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is the MessagesScreen</Text>
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

export default MessagesScreen;
