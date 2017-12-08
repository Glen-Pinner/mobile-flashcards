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
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/helpers'
import { midnight_blue, clouds, white } from './utils/colours'

// import { clearData } from './utils/_decks'
// clearData()

const store = createStore(reducer)

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <Entypo name='list' size={24} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={24} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: midnight_blue,
    style: {
      backgroundColor: clouds,
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
      headerStyle: {
        color: clouds
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: clouds,
      headerStyle: {
        marginTop: -20,       // compensate for styling introduced by StackNavigator
        backgroundColor: midnight_blue,
      },
      headerBackTitle: null   // disable "back" heading for subscreens
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: clouds,
      headerStyle: {
        marginTop: -20,       // compensate for styling introduced by StackNavigator
        backgroundColor: midnight_blue,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: clouds,
      headerStyle: {
        marginTop: -20,       // compensate for styling introduced by StackNavigator
        backgroundColor: midnight_blue,
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
  componentDidMount () {
    setLocalNotification()
  }

  render () {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={midnight_blue} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
