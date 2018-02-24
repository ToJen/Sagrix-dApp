import React, { Component } from 'react';
import { View, TextInput, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../images/logo.png';


const lockIcon = require("../images/lock.png");
const personIcon = require("../images/person.png");

class loginScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
          <View style={styles.wrapper}>
          <Image source={logo} style={{ alignItems:'center', justifyContent:'center', alignSelf:'center', width: 400, height: 200 }}></Image>
          <View>
            <Text style={styles.motto}>Healthcare Planning the Smart Way</Text>
          </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source={personIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                placeholder="Username"
                style={styles.input}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source={lockIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                underlineColorAndroid="transparent"
              />
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.forgotPasswordText}>New to Sagrix?</Text>
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
                <Text onPress={()=>
                this.props.navigation.navigate('signUpScreen')} style={styles.buttonText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
  },
  wrapper: {
    paddingHorizontal: 25,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 20,
    height: 40,
    width: 300,
    backgroundColor: "transparent",
    alignSelf:'center'
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF'
  },
  iconWrap: {
    paddingHorizontal: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#605E5E"
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: "#605E5E",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    width: 150,
    marginLeft: 120,
    justifyContent: "center",

  },
  buttonText: {
    color: "#FFF",
    fontSize: 18
  },
  forgotPasswordText: {
    color: "#FFF",
    backgroundColor: "transparent",
    textAlign: "center"
  }
});

export default loginScreen;
