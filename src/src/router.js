import React from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SharingScreen from './screens/SharingScreen';
import FeaturedScreen from './screens/FeaturedScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreateAlbumScreen from './screens/CreateAlbumScreen'
import { Entypo, FontAwesome } from '@expo/vector-icons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

const HomeNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () => {
          return(
          <Entypo name="basecamp" size={32} color='#707070' />
        );
        },
      },
    },
    Sharing: { screen: SharingScreen,
    navigationOptions: {
      tabBarIcon: () => {
        return(
        <FontAwesome name="superpowers" size={28} color='#707070' />
      );
      },
    }
  },
    Featured: { screen: FeaturedScreen,
      navigationOptions: {
        tabBarIcon: () => {
          return(
          <Entypo name="rocket" size={32} color='#707070' />
        );
        },
      }
    },

  },
  {
      initialRouteName: 'Home',
      tabBarOptions: {
        tabStyle: {
          backgroundColor: '#80B2BE',
        },
      },
  },
);

const AuthNavigator = createStackNavigator(
  {
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
},
{
  initialRouteName: 'Login',
},
);

const ToolbarNavigator = createStackNavigator(
  {
    Profile: { screen: ProfileScreen },
    CreateAlbum: { screen: CreateAlbumScreen}
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Home: HomeNavigator,
    Toolbar: ToolbarNavigator
  },
  {
    initialRouteName: 'Auth'
  }
);
