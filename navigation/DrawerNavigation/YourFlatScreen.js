import React from "react";
import { View, StyleSheet, Text } from "react-native";

const YourFlatScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is the YourFlatScreen</Text>
    </View>
  );
};

YourFlatScreen.navigationOptions = {
  headerTitle: 'Your Flats'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default YourFlatScreen;
