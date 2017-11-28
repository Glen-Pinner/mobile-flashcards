import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz'
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Quiz</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

export default Quiz
