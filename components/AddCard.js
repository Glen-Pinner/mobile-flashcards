import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'

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
        <View style={styles.center}>
          <Text style={styles.warningText}>You must enter a question and an answer!</Text>
          <TextButton onPress={this.onRetry}>Try again</TextButton>
        </View>
      )
    }

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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  warningText: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30
  }
})

export default connect()(AddCard)
