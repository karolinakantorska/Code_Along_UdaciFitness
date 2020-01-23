import React from "react"
import { View, Text } from "react-native"
import AddEntry from "./components/AddEntry"

export default class App extends React.Component {
  render () {
    return (
      <View>
        <Text>Udaci Slider</Text>
        <AddEntry />
        <Text>Udaci Slider</Text>
        <Text>Udaci Slider</Text>
      </View>
    )
  }
}
