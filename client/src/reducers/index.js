import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import cardReducer from "./card.reducer";
import errorReducer from "./error.reducer";
import allCardsReducer from "./allCards.reducer";

export default combineReducers({
  userReducer,
  cardReducer,
  errorReducer,
  allCardsReducer,
});
