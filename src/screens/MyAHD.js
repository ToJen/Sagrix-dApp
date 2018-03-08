import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView} from 'react-native'
import {DrawerNavigator} from 'react-navigation';
import CheckBox from 'react-native-checkbox-form'

export default class MyAHDScreen extends Component {
	/* Handle checkbox selection
	_onSelect = ( item ) => {
      console.log(item);
    }; */
	render() {
		const ahdQuestions = [
                        {label: 'Medical treatment for the primary purposes of research', value: 'one'},
                        {label: 'Sterilization that is not medically necessary for the \nprotection of my health', value: 'two'},
                        {label: 'The removal of tissue from my body while I am living for \ntransplantation to another person', value: 'three'},
                        {label: 'The removal of tissue from my body while I am living for \nthe purpose of medical education or medical research ', value: 'four'}
                      ];

		return(
			<View style={styles.container}>
				<ScrollView>
					<Text style={styles.bannerText}>You have authorised <Text style={styles.span}>4 people</Text> to make decisions on your behalf</Text>
					<Text style={{textAlign:'justify'}}>{'\n'}I consent to:{'\n'}</Text>
					<CheckBox
						dataSource={ahdQuestions}
						style={styles.questionStyle}
						itemShowKey="label"
						//onChecked={(item) => this._onSelect(item)}
      		/>
					<Text>{'\n'}</Text>
					<Button
						style={styles.update}
						color='#e7ff6e'
						title="UPDATE AHD"
						accessibilityLabel="Submit your updated AHD"
						onPress={() => this.props.navigation.navigate('MyAHDScreen')}
					 />
					<Text>{'\n'}All physicians in your Circle of Care will be notified of any changes made.</Text>
				</ScrollView>
      </View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  bannerText: {
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'justify'
  },
  span: {
    color: '#748037'
  },
  questions: {
    flex: 0.8,
    padding: 20
  },
  questionStyle: {

    flex: 0,
    flexWrap: 'wrap'
		//width: 350,
  },
  checkboxStyle: {
    color: '#e7ff6e'
  },
  update: {
   fontWeight: 'bold'
  }
});
