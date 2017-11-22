import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckList extends Component {
  componentDidMount () {
    getDecks()
      .then(decks => {
        this.props.dispatch(receiveDecks(decks))
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    const { quizzes } = this.props

    return (
      <View>
        {quizzes.map(({ title, questions }) => (
          <View key={title}>
            <Text>{title}</Text>
            <Text>{questions.length} cards</Text>
          </View>
        ))}
      </View>
    )
  }
}

function mapStateToProps (decks) {
  return {
    quizzes: Object.keys(decks).reduce((result, quiz) => {
      result.push(decks[quiz])
      return result
    }, [])
  }
}

export default connect(mapStateToProps)(DeckList)
