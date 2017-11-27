import React from 'react'
import { View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { Entypo } from '@expo/vector-icons'
import reducer from './reducers'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
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
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
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

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'UdaciCards',
      headerStyle: {
        color: '#fff'
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        marginTop: -20, // compensate for styling introduced by StackNavigator
        backgroundColor: '#2c3e50',
      }
    }
  }
}, {
  navigationOptions: {}
})

const UdaciStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor='#2c3e50' barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
