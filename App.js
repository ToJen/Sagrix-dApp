import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import loginScreen from './src/screens/loginScreen';
import signUpScreen from './src/screens/signUpScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
const AppNavigator = StackNavigator({
  loginScreen: { screen : loginScreen},
  signUpScreen: { screen : signUpScreen}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#043233',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//AppRegistry.registerComponent('App', () => App);
