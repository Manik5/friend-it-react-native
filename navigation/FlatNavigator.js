import React from 'react';

import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import { Ionicons, MaterialIcons, FontAwesome,SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/color.constant';

import HomeScreen from '../screens/HomeScreen';
import FlatDetailScreen from '../screens/FlatDetailScreen';
import BookingOverlayScreen from '../screens/BookingOverlayScreen'



// bottom navigator
import DashboardScreen from './BottomNavigator/DashBoardScreen';
import MessagesScreen from './BottomNavigator/MessagesScreen';
import ProfileScreen from './BottomNavigator/ProfileScreen';
import TripsScreen from './BottomNavigator/TripsScreen';

// drawer navigation
import FriendListScreen from './DrawerNavigation/FriendListScreen';
import UploadYourFlatScreen from './DrawerNavigation/UploadYourFlatScreen';
import YourFlatScreen from './DrawerNavigation/YourFlatScreen';


const defaultStyleNav = {
  headerTitleStyle: {
    backgroundColor: "white",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
  headerTintColor: Colors.primary
};

const FlatNavigator = createStackNavigator({
  Home: HomeScreen,
  FlatDetail: FlatDetailScreen,
  BookingOverlay: BookingOverlayScreen,
}, {
  defaultNavigationOptions: defaultStyleNav
}, {

});


// bottom navigator
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

// bottom navigator
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
      }
    );

    // drawer navigation

    const FriendNavigator = createStackNavigator(
      {
        FriendList: FriendListScreen,
      },
      {
        navigationOptions: {
          drawerIcon: drawerConfig => (
            <Ionicons
              name='ios-people'
              size={23}
              color={drawerConfig.tintColor}
            />
          )
        },
        defaultNavigationOptions: defaultStyleNav
      }
    );

    const UploadNavigator = createStackNavigator(
      {
        UploadFlat: UploadYourFlatScreen,
      },
      {
        navigationOptions: {
          drawerIcon: (drawerConfig) => (
            <SimpleLineIcons
              name="cloud-upload"
              size={20}
              color={drawerConfig.tintColor}
            />
          ),
        },
        defaultNavigationOptions: defaultStyleNav,
      }
    );

    const YourFlatNavigator = createStackNavigator(
      {
        YourFlat: YourFlatScreen,
      },
      {
        navigationOptions: {
          drawerIcon: (drawerConfig) => (
            <MaterialCommunityIcons
              name="flattr"
              size={20}
              color={drawerConfig.tintColor}
            />
          ),
        },
        defaultNavigationOptions: defaultStyleNav,
      }
    );


// drawer navigation


const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: BottomTabNavigator,
      navigationOptions: {
        drawerIcon: (drawerConfig) => (
          <MaterialIcons
            name="home"
            size={23}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    Friends: FriendNavigator,
    Upload: UploadNavigator,
    Flats: YourFlatNavigator,
  },
  {}
);


export default createAppContainer(DrawerNavigator);
