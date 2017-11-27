import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY } from './_decks'

export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => JSON.parse(results))
}

export const saveDeckTitle = title => {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}
