import { RECEIVE_DECKS } from './types'

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}
