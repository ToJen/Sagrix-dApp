import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

const Header = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.text}</Text>
    { props.canAdd && 
      <Icon style={{paddingLeft: 220}} name="ios-add-circle-outline" size={30} />
    }
  </View>
);

export default Header;
