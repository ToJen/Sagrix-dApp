import React, { Component } from 'react';
import { View, TextInput, Image, Text, Button,
        StyleSheet, TouchableOpacity, Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import logo from '../images/logo.png';


const lockIcon = require("../images/lock.png");
const personIcon = require("../images/person.png");

const IMAGE_HEIGHT_LARGE = 200
const IMAGE_HEIGHT_SMALL = 100

class IconTextInput extends Component {
  render() {
    return(
      <View style={styles.inputWrap}>
        <View style={styles.iconWrap}>
          <Image
            source={this.props.icon}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
        <TextInput
          placeholder={this.props.placeholder}
          style={styles.input}
          underlineColorAndroid="transparent"
        />
      </View>
    )
  }
}

export default class LoginScreen extends Component {

  constructor(props) {
    super(props)

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT_LARGE)
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove()
    this.keyboardWillHideSub.remove()
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL
    }).start()
  }

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_LARGE
    }).start()
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
          <Animated.Image source={logo} style={[styles.logo, {height: this.imageHeight}]} />
          <Text style={styles.motto}>Healthcare Planning the Smart Way</Text>
          <IconTextInput
            icon={lockIcon}
            placeholder="Username"
          />
          <IconTextInput
            icon={personIcon}
            placeholder="Password"
          />
          <TouchableOpacity activeOpacity={.5}>
            <View style={styles.button}>
              <Text
                style={styles.buttonText}
                onPress={ ()=> this.props.navigation.navigate('drawerStack') }
              >Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <View>
              <Text
                style={styles.forgotPasswordText}
                onPress={ ()=> this.props.navigation.navigate('ForgotPasswordScreen') }
              >Forgot Password?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <View style={styles.button}>
              <Text
                onPress={ ()=> this.props.navigation.navigate('SignupScreen') }
                style={styles.buttonText}
              >Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  logo: {
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width: 400
  },
  motto: {
    color: "#FFF",
    backgroundColor: "transparent",
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
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
    backgroundColor: "#748037"
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: "#748037",
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
