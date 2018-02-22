import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Landing from './src/components/Landing';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Landing/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//AppRegistry.registerComponent('App', () => App);
