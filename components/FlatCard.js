import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

const FlatCard = props => {
  return (
    <Card
			containerStyle={{
				borderRadius: 10,
				padding: 10
			}}
		>
      <Image
        style={styles.image}
        source={{ uri: props.image}}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>${props.price}</Text>
			 <Button
				 title="View"
				 type="outline"
				 buttonStyle={{
					 borderRadius: 20,
					 backgroundColor: 'white'
				 }}
			 />
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
		height: 200,
		borderRadius: 10
  },
  title: {
    fontSize: 16,
		marginVertical: 10,
		textAlign: 'center'
  },
  price: {
    fontSize: 14,
		color: '#888',
		marginVertical: 10,
		textAlign: 'center'
  }
})

export default FlatCard;
