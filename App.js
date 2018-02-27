import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';
import DashboardScreen from './src/screens/Dashboard';
import ForgotPasswordScreen from './src/screens/ForgotPassword';
import MyAHDScreen from './src/screens/MyAHD';
import CircleOfCareScreen from './src/screens/CircleOfCare';

const DrawerStack = DrawerNavigator({
  Dashboard: { screen : DashboardScreen},
  MyAHD: { screen : MyAHDScreen},
  CircleOfCare: { screen : CircleOfCareScreen},
})

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
        headerMode: 'float',
        navigationOptions: ({navigation}) => ({
          headerStyle: {backgroundColor: '#043233'},
          title: 'Logged In to Sagrix!',
          headerLeft: <Text style={{color: 'white'}} onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  })
  }
);

const LoginStack = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen },
  ForgotPasswordScreen: { screen: ForgotPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'none',
/*  navigationOptions: {
    headerStyle: {backgroundColor: 'red'},
    title: 'You are not logged in'
  } */
});

const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})

export default PrimaryNav
