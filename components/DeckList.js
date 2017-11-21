import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getDecks } from '../utils/api'

class DeckList extends Component {
  componentDidMount () {
    getDecks().then((decks) => {
      console.log(decks)
    })
  }

  render () {
    return (
      <View>
        <Text>DeckList</Text>
      </View>
    )
  }
}

export default DeckList
