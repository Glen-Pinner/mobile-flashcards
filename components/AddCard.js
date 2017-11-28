import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import TextButton from './TextButton'

class AddCard extends Component {
  static navigationOptions = {
    headerTitle: 'Add Card',
  }

  state = {
    question: '',
    answer: ''
  }

  onChangeQuestion = question => {
    console.log(question)
    this.setState({ question })
  }

  onChangeAnswer = answer => {
    console.log(answer)
    this.setState({ answer })
  }

  onSubmit = () => {
    const { question, answer } = this.state

    if (!question && !answer) {
      // Alert user
    }

    // Dispatch to Redux

    // Reset local state

    // Navigate back to Deck view

    // Update local store
  }

  render () {
    const { question, answer } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeQuestion}
          placeholder='Please enter a question'
          value={question}
        />
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeAnswer}
          placeholder='And an answer'
          value={answer}
        />
        <TextButton onPress={this.onSubmit}>Submit</TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  input: {
    height: 40,
    width: 320,
    marginBottom: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  },
})

export default AddCard
