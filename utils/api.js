import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, getDeckData } from './_decks'

export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(getDeckData)
}

export const saveDeckTitle = title => {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

export const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results)
      const questions = data[title].questions.concat(card)

      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          questions
        }
      }))
    })
}
