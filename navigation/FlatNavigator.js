import React from 'react';

import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/color.constant';

import HomeScreen from '../screens/HomeScreen';


const FlatNavigator = createStackNavigator({
  Home: HomeScreen
}, {
  defaultNavigationOptions: {
    headerTitleStyle: {
      backgroundColor: 'white',
      alignSelf: 'center'
    },
    headerTintColor: Colors.primary
	},
});


export default createAppContainer(FlatNavigator);
