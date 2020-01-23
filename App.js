import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback

 } from "react-native"
import AddEntry from "./components/AddEntry"

export default class App extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight style= {styles.btn} onPress={this.handlePress} underlayColor= '#d4271B'>
          <Text style= {styles.btnText}>
            TouchableHighlight
          </Text>
        </TouchableHighlight>

        <AddEntry />

      </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:10,
    marginRight:10,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }
})
