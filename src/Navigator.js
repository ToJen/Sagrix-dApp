import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems, addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware, } from 'react-navigation-redux-helpers';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import DashboardScreen from './screens/Dashboard';
import ForgotPasswordScreen from './screens/ForgotPassword';
import MyAHDScreen from './screens/MyAHD';
import CircleOfCareScreen from './screens/CircleOfCare';
import DataAccessScreen from './screens/DataAccess';

import getWeb3 from './utils/getWeb3';


const DrawerStack = DrawerNavigator({
  Dashboard: {
    screen : DashboardScreen,
    navigationOptions: {
      title: 'Dashboard',
      drawerIcon: () => (<Icon name="home" size={20} color="#043233" />)
    }
  },
  MyAHD: {
    screen : MyAHDScreen,
    navigationOptions: {
      title: 'MyAHD',
      drawerIcon: () => (<Icon name="file-text-o" size={20} color="#043233" />)
    }
  },
  CircleOfCare: {
    screen : CircleOfCareScreen,
    navigationOptions: {
      title: 'Circle of Care',
      drawerIcon: () => (<Icon name="group" size={20} color="#043233" />)
    }
  },
  DataAccess: {
    screen : DataAccessScreen,
    navigationOptions: {
      title: 'Data Access',
      drawerIcon: () => (<Icon name="unlock-alt" size={20} color="#043233" />)
    }
  },
  Logout: {
    screen : LoginScreen,
    navigationOptions: {
      header: null,
      drawerIcon: () => (<Icon name="sign-out" size={20} color="#043233" />)
    }
  },

})

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#e7ff6e'},
      headerLeft: <Icon name="navicon" size={30}
                        color="#043233" style={{padding: 5}}
                        onPress={() => {
                                  if (navigation.state.index === 0) {
                                    navigation.navigate('DrawerOpen')
                                  } else {
                                    navigation.navigate('DrawerClose')
                                  }
                                }}
                  />

    }),
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

const middleware = createReactNavigationReduxMiddleware("root", state => state.navigation);
const addListener = createReduxBoundAddListener("root");

export const Navigator = new StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'loginStack'
})

class Nav extends Component {
  render() {
    return (
        <Navigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
          addListener
        })} />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(Nav)
