import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';
import DashboardScreen from './src/screens/Dashboard';
import ForgotPasswordScreen from './src/screens/ForgotPassword';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator(
  {
    LoginScreen: { screen : LoginScreen},
    SignupScreen: { screen : SignupScreen},
    DashboardScreen: { screen : DashboardScreen},
    ForgotPasswordScreen: { screen : ForgotPasswordScreen}
  },
  { 
    initialRouteName: 'LoginScreen',
    headerMode: 'none'
  }
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#043233',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
