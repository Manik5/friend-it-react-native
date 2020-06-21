import React from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";


const UploadYourFlatScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.formControl}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.label}>ImageUrl</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.label}>Perks</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.label}>Price</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.label}>Location</Text>
        <TextInput style={styles.input} />
      </View>
    </ScrollView>
  );
};


UploadYourFlatScreen.navigationOptions = navData => {
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default UploadYourFlatScreen;
