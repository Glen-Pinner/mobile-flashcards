import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import DeckInfo from './DeckInfo'
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

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <DeckInfo key={item.title} {...item} />
      </TouchableOpacity>
    )
  }

  render () {
    const { decks } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          keyExtractor={(item) => item.title}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})

function mapStateToProps (decks) {
  return {
    decks: Object.keys(decks).reduce((result, quiz) => {
      result.push(decks[quiz])
      return result
    }, [])
  }
}

export default connect(mapStateToProps)(DeckList)
