import React, { Component } from 'react';
import { View, TextInput, Image, Text, Button,
        StyleSheet, TouchableOpacity, Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';
import logo from '../images/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';


const lockIcon = <Icon name="lock" size={20} color="#000" />
const personIcon = <Icon name="user" size={20} color="#000" />

const IMAGE_HEIGHT_LARGE = 200
const IMAGE_HEIGHT_SMALL = 100

class IconTextInput extends Component {
  render() {
    return(
      <View style={styles.inputWrap}>
        <View style={styles.iconWrap}>
          {this.props.icon}
        </View>
        <TextInput
          placeholder={this.props.placeholder}
          style={styles.input}
          underlineColorAndroid="transparent"
          secureTextEntry={this.props.placeholder == 'Password'}
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
        {/* <View style={{ backgroundColor: '#043233', flex: 1 }} /> */}
        <LinearGradient colors={['rgba(4,50,51,0.9)', 'transparent']} style={styles.linearGradient}>
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
            <TouchableOpacity
            style={styles.button}
            onPress={ ()=> this.props.navigation.navigate('drawerStack') }
            >
            <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
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
            <TouchableOpacity
              style={styles.button}
              onPress={ ()=> this.props.navigation.navigate('SignupScreen') }
              >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          
        </LinearGradient>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#043233',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 850,
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
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: "#000"
  },
  iconWrap: {
    paddingHorizontal: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e7ff6e",
    borderRadius:10,
    marginRight: 5
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: "#e7ff6e",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    width: 150,
    marginLeft: 120,
    justifyContent: "center",
    borderRadius: 10
  },
  buttonText: {
    color: "#000",
    fontSize: 18
  },
  forgotPasswordText: {
    color: "#FFF",
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf:'center'
  }
});
