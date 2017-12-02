import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

class AddDeck extends Component {
  state = {
    title: '',
    warning: false
  }

  onChangeTitle = title => {
    this.setState({ title })
  }

  onSubmit = () => {
    const { title } = this.state

    // Alert user if no title is entered
    if (!title) {
      return this.setState({ warning: true })
    }

    // Dispatch to Redux
    this.props.dispatch(addDeck(title))

    // Reset local state
    this.setState(() => ({ title: ' ' }))

    // Navigate to Deck component
    this.toDeck(title)

    // Update local store
    saveDeckTitle(title)
  }

  toDeck = title => {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({
          routeName: 'Home'
        }),
        NavigationActions.navigate({
          routeName: 'Deck',
          params: {
            deck: {
              title,
              questions: []
            }
          }
        })
      ]
    }))
  }

  onRetry = () => this.setState({ warning: false })

  render () {
    const { title, warning } = this.state

    if (warning) {
      return (
        <View style={styles.center}>
          <Text style={styles.warningText}>You forgot to enter a title!</Text>
          <TextButton border onPress={this.onRetry}>Try again</TextButton>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeTitle}
          placeholder='Deck Title'
          value={title}
        />
        <TextButton border onPress={this.onSubmit}>Submit</TextButton>
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
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30
  },
  input: {
    height: 40,
    width: 200,
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
  },
  buttonContainer: {
    backgroundColor: 'black',
    color: 'white'
  }
})

export default connect()(AddDeck)
