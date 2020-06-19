import React from "react";
import { View, StyleSheet, Text } from "react-native";

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

ListFlatScreen.navigationOptions = {
  headerTitle: 'Upload Your Flat'
}

export default ListFlatScreen;
