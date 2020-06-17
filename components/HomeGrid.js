import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform,
	StatusBar,
	SafeAreaView,
	TextInput
} from 'react-native';

import { Ionicons } from '@expo/vector-icons'

const HomeGrid  = props => {
	return (
		<SafeAreaView>
			<View>
				<View>
					<View>
						<Ionicons />
						<TextInput />
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({

});

export default HomeGrid;
