import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { midnight_blue, silver, white } from '../utils/colours'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck: { title } } = navigation.state.params
    return { headerTitle: title }
  }

  render () {
    const { title, questions } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cards}>{questions.length} cards</Text>
        <View style={styles.buttonContainer}>
          <TextButton
            onPress={() => this.props.navigation.navigate('AddCard', { title })}
            buttonStyle={{ backgroundColor: 'transparent' }}
            textStyle={{ color: midnight_blue }}
          >
            Add Card
          </TextButton>
        </View>
        <View style={styles.buttonContainer}>
          <TextButton
            onPress={() => this.props.navigation.navigate('Quiz', { questions })}
          >
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
    backgroundColor: white
  },
  title: {
    fontSize: 28,
    marginTop: -100,
    marginBottom: 20
  },
  cards: {
    fontSize: 18,
    color: silver,
    marginBottom: 20
  },
  buttonContainer: {
    margin: 10
  }
})

function mapStateToProps (state, ownProps) {
  const { deck: { title } } = ownProps.navigation.state.params
  const questions = state[title].questions

  return { title, questions }
}

export default connect(mapStateToProps)(Deck)
