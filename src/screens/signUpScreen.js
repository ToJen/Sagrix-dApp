import React, { Component } from 'react';
import { View, TextInput, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

class signUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.sign}>Sign Up to Sagrix</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.motto}>Enter all the fields:</Text>
          <Text>{'\n'}</Text>
        </View>
        <View>
          <Text style={styles.label}>Full name:</Text>
          <TextInput
            placeholder="Full name"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <Text>{'\n'}</Text>
        </View>

        <View>
          <Text style={styles.label}>MCP number:</Text>
          <TextInput
            placeholder="MCP"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <Text>{'\n'}</Text>
        </View>

        <View>
          <Text style={styles.label}>Address:</Text>
          <TextInput
            placeholder="Address"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <Text>{'\n'}</Text>
        </View>

        <View>
          <Text style={styles.label}>Phone:</Text>
          <TextInput
            placeholder="Phone"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <Text>{'\n'}</Text>
        </View>

        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
        </View>


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
  input: {
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
  motto: {
    color: "#FFF",
    backgroundColor: "transparent",
    alignSelf: "center",
    fontWeight: 'bold',
    fontSize: 20,
  },
  label: {
    color: "#FFF"
  }
});

export default signUpScreen;
