import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

class AddDeck extends Component {
  state = {
    title: ''
  }

  onChangeText = title => {
    this.setState({ title })
  }

  onSubmit = () => {
    const { title } = this.state

    // Dispatch to redux
    this.props.dispatch(addDeck(title))

    // Reset local state
    this.setState(() => ({ title: ' ' }))

    // navigate to Deck component

    // Update local store
    saveDeckTitle(title)
  }

  render () {
    const { title } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}
          placeholder='Deck Title'
          value={title}
        />
        <TextButton onPress={this.onSubmit}>Submit</TextButton>
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
  buttonContainer: {
    backgroundColor: 'black',
    color: 'white'
  }
})

export default connect()(AddDeck)
