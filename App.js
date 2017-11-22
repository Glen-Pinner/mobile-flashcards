import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckList from './components/DeckList'
import { setDummyData } from './utils/_decks'

setDummyData()

const store = createStore(reducer)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DeckList />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
