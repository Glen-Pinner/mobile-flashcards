import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'UdaciCards:decks'

const initialDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared'
      }
    ]
  }
}

const setDummyData = () => {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialDecks))

  return initialDecks
}

export const getDeckData = results => {
  return results === null
    ? setDummyData()
    : JSON.parse(results)
}

export const clearData = () => {
  AsyncStorage.clear()
}
