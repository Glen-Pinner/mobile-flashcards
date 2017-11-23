import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import reducer from './reducers'
import DeckList from './components/DeckList'
import { setDummyData } from './utils/_decks'

setDummyData()

const store = createStore(reducer)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar />
          </View>
          <DeckList />
        </View>
      </Provider>
    )
  }
}
