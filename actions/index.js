import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from './types'

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

export const addCard = (title, card) => {
  return {
    type: ADD_CARD,
    title,
    card
  }
}
