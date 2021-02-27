import { GET_ALL_CARDS } from "../actions/card.actions";

const initialState = {};

export default function allCardsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CARDS:
      return action.payload;
    default:
      return state;
  }
}
