import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TextButton from './TextButton'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck: { title } } = navigation.state.params

    return { headerTitle: title }
  }

  render () {
    const { deck: { title, questions } } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cards}>{questions.length} cards</Text>
        <View style={styles.buttonContainer}>
          <TextButton
            onPress={() => this.props.navigation.navigate('AddCard', { title })}
            style={{ backgroundColor: 'transparent', color: 'black' }}
          >
            Add Card
          </TextButton>
        </View>
        <View style={styles.buttonContainer}>
          <TextButton onPress={() => this.props.navigation.navigate('Quiz')}>
            Start Quiz
          </TextButton>
        </View>
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
  title: {
    fontSize: 28,
    marginTop: -100,
    marginBottom: 20
  },
  cards: {
    fontSize: 18,
    color: '#999',
    marginBottom: 20
  },
  buttonContainer: {
    margin: 10
  }
})

export default Deck
