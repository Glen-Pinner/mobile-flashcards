import React from 'react'
import { View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { Entypo } from '@expo/vector-icons'
import reducer from './reducers'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import { setDummyData } from './utils/_decks'

setDummyData()

const store = createStore(reducer)

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: <Entypo name='list' size={24} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: <Entypo name='add-to-list' size={24} />
    }
  }
}, {
  tabBarOptions: {
    // labelStyle: {
    //   fontSize: 12
    // },
    style: {
      backgroundColor: '#eee',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const UdiciStatusBar = () => (
  <View style={{ height: Constants.statusBarHeight }}>
    <StatusBar />
  </View>
)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UdiciStatusBar />
          <Tabs />
        </View>
      </Provider>
    )
  }
}
