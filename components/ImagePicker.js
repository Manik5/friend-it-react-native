import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { Button } from 'react-native-elements'
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

export default function ImagePickerExample() {
  const [image, setImage] = useState();

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (

    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!image ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image
            source={{ uri: image }}
            style={styles.image}
          />
        )}
      </View>
      <Button
        title='Upload Image'
        type='outline'
        onPress={pickImage}
        buttonStyle={{
          borderRadius: 20,
          width: 150
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center'
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
