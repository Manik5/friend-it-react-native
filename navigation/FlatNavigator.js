import React from 'react';

import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/color.constant';

import HomeScreen from '../screens/HomeScreen';
import FlatDetailScreen from '../screens/FlatDetailScreen';


const FlatNavigator = createStackNavigator({
	Home: HomeScreen,
	FlatDetail: FlatDetailScreen,

}, {
  defaultNavigationOptions: {
    headerTitleStyle: {
			backgroundColor: 'white',
			fontSize: 18,
			fontFamily: 'open-sans-bold'
    },
    headerTintColor: Colors.primary
	},
});


export default createAppContainer(FlatNavigator);
