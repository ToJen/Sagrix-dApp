import React, { Component } from 'react';
import { View, TextInput, Image, Text, Button } from 'react-native';

import logo from '../images/logo.png';

export default class Landing extends Component {

    render() {
        return (
	    <View>
                <Image source={logo} style={{ alignItems:'center', justifyContent:'center' }}></Image>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>

		<Text style={{fontSize:18}}>Username: {"\t"}</Text>
                <Text>{"\n"}</Text>
	        <TextInput
		    editable={true}
		    maxLength={40}
		    placeholder="Jane Smith" />
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
                <Text style={{fontSize:18}}>Password: {"\t"}</Text>
                <Text>{"\n"}</Text>
                <TextInput
 		    editable={true}
                    maxLength={40}
                    placeholder="********"
                    secureTextEntry={true} />
                <Text>{"\n"}</Text>

		<Button title="Login"/>
	    </View>
        )
    }
}
