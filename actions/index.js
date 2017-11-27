import { RECEIVE_DECKS, ADD_DECK } from './types'

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export const addDeck = (title) => {
  return {
    type: ADD_DECK,
    title
  }
}
