import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
import { Card, Button, Text } from 'react-native-elements';

import Colors from '../constants/color.constant';
import { MaterialIcons } from '@expo/vector-icons';


const FlatCard = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <TouchableComponent
      onPress={props.onSelect}
     >
      <Card
        containerStyle={{
          borderRadius: 10,
          padding: 10,
          marginBottom: 20
        }}
      >
        <Image style={styles.image} source={{ uri: props.image }} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price}</Text>
        <Text
          style={styles.location}>
            <MaterialIcons
              name='location-on'
              size={18} color={Colors.primary}
            /> {props.location}
				</Text>
				{ props.children }
      </Card>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
    fontFamily: 'open-sans-bold',
    color: Colors.primary
  },
  price: {
    fontSize: 14,
    color: "#888",
    marginVertical: 10,
    textAlign: "center",
  },
  location: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: "center",
    fontFamily: 'open-sans'
  }
});

export default FlatCard;
