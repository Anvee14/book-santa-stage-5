import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/notificationScreen'
import MyDonationsScreen from '../screens/MyDonationsScreen';
import MyRecievedBooks from '../screens/MyRecievedBooks';
export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppTabNavigator
  },
  Setting: {
    screen: SettingScreen
  },
  Notification: {
    screen: NotificationScreen
  },
  MyDonation: {
    screen: MyDonationsScreen
  },
  MyRecievedBooks: {
    screen: MyRecievedBooks
  }
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName: 'Home'
  })
