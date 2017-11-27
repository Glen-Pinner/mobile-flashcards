import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import TextButton from './TextButton'

class AddDeck extends Component {
  state = {
    text: ''
  }

  onChangeText = text => {
    this.setState({ text })
  }

  onSubmit = () => {
    console.log("onSubmit", this.state.text)

    // Dispatch to redux

    // Update local store

    // navigate to Deck component

  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}
          placeholder='Deck Title'
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

export default AddDeck
