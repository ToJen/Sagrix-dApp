import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {DrawerNavigator} from 'react-navigation';
import getWeb3 from '../utils/getWeb3'

export default class DashboardScreen extends Component {
	constructor(props) {
		super(props)
		// this.web3 = this.setWeb3()
		this.web3 = getWeb3()
		// console.log("web3 is :" + this.web3)

		// this.web3.eth.getBlock('latest').then(console.log)
		this.web3.eth.getAccounts().then(accounts => console.log(accounts))
	}

	async setWeb3() {
		return await getWeb3() 
	}

	render() {
		return(
      <View>
        <Text>Dashboard</Text>
				<Text>{'\n\n\n\n\n'}</Text>
				{/* <Text>{this.web3.eth.accounts[0]}</Text> */}
      </View>
		)
	}
}
