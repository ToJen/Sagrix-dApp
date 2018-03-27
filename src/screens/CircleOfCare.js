import React, { Component } from 'react'
import {Platform, StyleSheet, Text, Button, View, TouchableOpacity, Animated, Image} from 'react-native'
import {DrawerNavigator} from 'react-navigation';

class Contacts extends Component{
	/*save: {

	}*/
	render(){
		return(
			<View>
            <Text>{this.props.name}</Text>
            <Text>{this.props.id}</Text>
						<TouchableOpacity activeOpacity={.5}>
              <TouchableOpacity
                 style={styles.button}
								 //onPress={ ()=> this.save }
                 >
                 <Text style={styles.buttonText}>Save</Text>

              </TouchableOpacity>
            </TouchableOpacity>
      </View>
		)
	}
}
export default class CircleOfCareScreen extends Component {
	render() {
		return(
      <View>
        <Contacts name="Prasanga Dhakal" id="MC-1111-DR"/>
				<Contacts name="Tomisin Jenrola" id="MC-1671-DR"/>
        <Contacts name="Xiaodong Yan" id="MC-1234-DR"/>
      </View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#043233',
    alignItems: 'center',
    justifyContent: 'center',
  },
  motto: {
    color: "#FFF",
    backgroundColor: "transparent",
    alignSelf: "center",
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: '#FFF'
  },
  sign: {
    color: "#FFF",
    backgroundColor: "transparent",
    alignSelf: "center",
    fontWeight: 'bold',
    fontSize: 40,
  },
  label: {
    color: "#FFF"
  },
  button: {
    backgroundColor: "#748037",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    width: 150,
    marginLeft: 80,
    justifyContent: "center",

  },
  buttonText: {
    color: "#FFF",
    fontSize: 18
  }
});
