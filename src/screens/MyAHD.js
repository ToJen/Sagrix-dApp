import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import {DrawerNavigator} from 'react-navigation'
import CheckBox from 'react-native-checkbox'


//const Sliding_Drawer_Width = 350;
export default class MyAHDScreen extends Component {

	render() {

    const ahdQuestions = [
                        'Medical treatment for the primary purposes of research',
                        'Sterilization that is not medically necessary for the protection of my health',
                        'The removal of tissue from my body while I am living for transplantation to another person',
                        'The removal of tissue from my body while I am living for the purpose of medical education or medical research'
                      ];

    const ahdCheckboxes = ahdQuestions.map((question) => {
                                            return <CheckBox
                                                            key={Math.random}
                                                            label={question}
                                                            labelStyle={styles.questionStyle}
                                                            underLayColor='#e7ff6e'
                                                    />
                                          })

		return(
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.bannerText}>You have authorised <Text style={styles.span}>4 people</Text> to make decisions on your behalf</Text>
          <Text style={{textAlign:'justify'}}>{'\n'}I consent to:{'\n'}</Text>
          <View style={styles.questions}>
            {ahdCheckboxes}
          </View>
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
    flex: 1,
    flexWrap: 'wrap'
  },
  checkboxStyle: {
    color: '#e7ff6e'
  },
  update: {
   fontWeight: 'bold'
  }
});
