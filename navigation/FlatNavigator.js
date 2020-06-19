import React from 'react';

import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/color.constant';

import HomeScreen from '../screens/HomeScreen';
import FlatDetailScreen from '../screens/FlatDetailScreen';
import BookingOverlayScreen from '../screens/BookingOverlayScreen'

// bottom navigator
import ProfileScreen from '../screens/BottomNavigatorScreen/ProfileScreen';
import MessagesScreen from '../screens/BottomNavigatorScreen/MesagesScreen';
import DashboardScreen from '../screens/BottomNavigatorScreen/DashBoardScreen';
// bottom navigator


const FlatNavigator = createStackNavigator({
  Home: HomeScreen,
  FlatDetail: FlatDetailScreen,
  BookingOverlay: BookingOverlayScreen,
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

const BottomTabNavigator = createBottomTabNavigator({
  Home: FlatNavigator,
  Dashboard: DashboardScreen,
  Messages: MessagesScreen,
  Profile: ProfileScreen
});


export default createAppContainer(BottomTabNavigator);
