import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../components/Header'


class AccessDetails extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={styles.access}>
				<View style={styles.col1}>
					<Text style={styles.entity}>{this.props.entity}</Text>
					<Text style={this.props.style}>{this.props.duration}</Text>
				</View>
				<Icon name="edit-3" size={30} color="#000" />
			</View>
		);
	}
}

export default class DataAccessScreen extends Component {
	render() {
		return(
      <View style={styles.container}>
				<ScrollView>
					<View style={styles.upper}>
						<Header text="Current Access" />
						<AccessDetails style={styles.warn} entity="Eastern Health" duration="2 months left" />
						<AccessDetails style={styles.late} entity="Ontario Emergency" duration="14 hours left" />
						<AccessDetails style={styles.safe} entity="St. Nicholas Hopsital" duration="1 year left" />
					</View>
					<Text>{"\n"}</Text>
					<View style={styles.lower}>
						<Header text="Track Data Access" />
						<Text style={styles.info}>Discover where your health data has been accessed.</Text>
						<View style={styles.imageWrapper}><Image style={styles.image} source={require('../images/access-graph.jpg')}/></View>
						<Text style={styles.details}> Details > </Text>
					</View>
				</ScrollView>
      </View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	},
	access: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
	},
	upper: {
		flex: 0.5
	},
	lower: {
		flex: 0.5,
	},
	col1: {
		flex: 0.9
	},
	entity: {
		fontSize: 20,
		paddingLeft: 20
	},
	duration: {
		fontSize: 15,
		color: "rgba(192,192,192,0.8)",
		paddingLeft: 20
	},
	safe: {
		fontSize: 15,
		color: "darkgreen",
		paddingLeft: 20
	},
	warn: {
		fontSize: 15,
		color: "rgba(255,195,0,0.8)",
		paddingLeft: 20
	},
	late: {
		fontSize: 15,
		color: "rgba(255,0,0,0.8)",
		paddingLeft: 20
	},
	details: {
		fontSize: 15,
		textAlign: "right"
	},
	info: {
		fontStyle: "italic",
		margin: 5,
	},
	imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
	},
	image: {
		width: 200,
		height: 300
	}
});