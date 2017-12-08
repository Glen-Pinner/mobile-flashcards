import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'
import { midnight_blue, white } from '../utils/colours'

class AddCard extends Component {
  static navigationOptions = {
    headerTitle: 'Add Card',
  }

  state = {
    question: '',
    answer: '',
    warning: false
  }

  onChangeQuestion = question => {
    this.setState({ question })
  }

  onChangeAnswer = answer => {
    this.setState({ answer })
  }

  onSubmit = () => {
    const { question, answer } = this.state
    const { title } = this.props.navigation.state.params

    // Alert user if card is incomplete
    if (!question || !answer) {
      return this.setState({ warning: true })
    }

    // Dispatch to Redux
    this.props.dispatch(addCard(title, { question, answer }))

    // Reset local state
    this.setState({
      question: '',
      answer: '',
      warning: false
    })

    // Navigate back to Deck view
    this.props.navigation.goBack()

    // Update local store
    addCardToDeck(title, { question, answer })
  }

  onRetry = () => this.setState({ warning: false })

  render () {
    const { question, answer, warning } = this.state

    if (warning) {
      return (
        <KeyboardAvoidingView behavior='padding' style={styles.center}>
          <Text style={styles.warningText}>You must enter a question and an answer!</Text>
          <TextButton onPress={this.onRetry}>Try again</TextButton>
        </KeyboardAvoidingView>
      )
    }

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
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
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white
  },
  input: {
    height: 40,
    width: '80%',
    padding: 8,
    marginBottom: 30,
    borderColor: midnight_blue,
    borderWidth: 1,
    borderRadius: 5
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white
  },
  warningText: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30
  }
})

export default connect()(AddCard)
