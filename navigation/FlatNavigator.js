import React from 'react';

import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/color.constant';

import HomeScreen from '../screens/HomeScreen';
import FlatDetailScreen from '../screens/FlatDetailScreen';
import BookingOverlayScreen from '../screens/BookingOverlayScreen'

// bottom navigator
import ProfileScreen from '../screens/BottomNavigatorScreen/ProfileScreen';
import MessagesScreen from '../screens/BottomNavigatorScreen/MesagesScreen';
import DashboardScreen from '../screens/BottomNavigatorScreen/DashBoardScreen';
import TripsScreen from '../screens/BottomNavigatorScreen/TripsScreen';
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



const tabScreenConfig = {
  Home: {
    screen: FlatNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <MaterialIcons name='home' size={23} color={tabInfo.tintColor} />
      }
    },
    tabBarColor: Colors.primary
  },
  Dashboard: {
     screen: DashboardScreen,
     navigationOptions: {
       tabBarIcon: (tabInfo) => {
         return <MaterialIcons name='dashboard' size={23} color={tabInfo.tintColor} />
       }
     }
    },
  Trips: {
    screen: TripsScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-paper-plane' size={23} color={tabInfo.tintColor} />
      }
    }
  },
  Messages: {
    screen: MessagesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-chatbubbles' size={23} color={tabInfo.tintColor} />
      }
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <FontAwesome name='user-circle-o' size={23} color={tabInfo.tintColor} />
      }
    }
  },
}


const BottomTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.primary,
        shifting: true,
        barStyle: { backgroundColor: "#FFFFFF" },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primary,
        },
      });


export default createAppContainer(BottomTabNavigator);
