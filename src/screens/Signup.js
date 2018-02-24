import React, { Component } from 'react';
import { View, TextInput, Image, Text, Button, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


export default class SignupScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.motto}>Enter all the fields:{'\n'}</Text>
          <TextInput
            placeholder="Full name"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <Text>{'\n'}</Text>
          <TextInput
            placeholder="MCP number"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <Text>{'\n'}</Text>
        </View>
        <KeyboardAvoidingView behavior="padding">
          <View>
            <TextInput
              placeholder="Address"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
            <Text>{'\n'}</Text>

            <TextInput
              placeholder="Phone"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
            <Text>{'\n'}</Text>

            <TextInput
              placeholder="Email"
              style={styles.input}
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
                <Text
                  onPress={ ()=> this.props.navigation.navigate('DashboardScreen') }
                  style={styles.buttonText} 
                >Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
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
    backgroundColor: "#605E5E",
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

