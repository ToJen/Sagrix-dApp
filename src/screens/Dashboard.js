import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native'
import {DrawerNavigator} from 'react-navigation';
// import {STATUS_BAR_HEIGHT} from '../constants';

const STATUS_BAR_HEIGHT = 10

export default class DashboardScreen extends Component {
	static navigationOptions = () => ({
		title: 'Dashboard',
		headerStyle:{
			height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
			backgroundColor: '#2196F3'
		},
		headerTitleStyle: {
			marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
			color: 'white'
		},
		headerLeft: <View>I</View>
	})
	
	render() {
		return(
			<View>
				<Text>Dashboard</Text>
			</View>
		)
	}
}
