import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions/types'

function addCard (state, action) {
  const { title, card } = action

  return {
    ...state,
    [title]: {
      ...state[title],
      questions: state[title].questions.concat(card)
    }
  }
}

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }

    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }

    case ADD_CARD:
      return addCard(state, action)

    default:
      return state
  }
}
