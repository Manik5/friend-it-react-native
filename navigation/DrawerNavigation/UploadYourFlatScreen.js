import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput
} from "react-native";

import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

import ImagePicker from '../../components/ImagePicker';

import Colors from '../../constants/color.constant';

const UploadYourFlatScreen = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const flatId = props.navigation.getParam('flatId');


  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChange={(text) => setTitle(text)}
          />
        </View>
        <ImagePicker />
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChange={(text) => setDescription(text)}
          />
        </View>
        <Text style={styles.label}>Perks</Text>
        <View style={styles.perkContainer}>
          <TextInput
            style={styles.input}
            value={perks}
            onChange={(text) => setPerks(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChange={(text) => setPrice(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChange={(text) => setLocation(text)}
          />
        </View>
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"}
          onPress={() => {}}
        />
      </HeaderButtons>
    ),
  };
}

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  },
  perkContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 20
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1
  },
});


export default UploadYourFlatScreen;
