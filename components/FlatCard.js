import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

const FlatCard = props => {
  return (
    <Card
      containerStyle={{
        width: 300
      }}
    >
      <Image
        style={styles.image}
        source={{ uri: props.image}}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>${props.price}</Text>
        <Button
          type='outline'
          title="View Details"
          onPress={props.onViewDetail}
          buttonStyle={{
             borderRadius: 20,
             width: 200,
             alignItems: 'center'
           }}
        />
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: '#888'
  }
})

export default FlatCard;
