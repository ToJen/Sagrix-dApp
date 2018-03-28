import React, { Component } from 'react';
import { View, TextInput, Image, Text, Button, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';


export default class SignupScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['rgba(4,50,51,0.9)', 'transparent']} style={styles.linearGradient}>
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
                <TouchableOpacity
                  style={styles.button}
                  onPress={ ()=> this.props.navigation.navigate('drawerStack') }
                  >
                  <Text style={styles.buttonText}>Submit</Text>
                  
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </View>
    );
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
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    height: 650,
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
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10
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
    backgroundColor: "#e7ff6e",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    width: 150,
    marginLeft: 80,
    justifyContent: "center",
    borderRadius: 10
  },
  buttonText: {
    color: "#000",
    fontSize: 18
  }
});
