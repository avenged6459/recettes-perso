import {
  DELETE_COMMENT,
  DELETE_CARD,
  EDIT_COMMENT,
  GET_CARDS,
  LIKE_CARD,
  UNLIKE_CARD,
  UPDATE_CARD,
} from "../actions/card.actions";

const initialState = {};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return action.payload;
    case LIKE_CARD:
      return state.map((card) => {
        if (card._id === action.payload.cardId) {
          return {
            ...card,
            likers: [action.payload.userId, ...card.likers],
          };
        }
        return card;
      });
    case UNLIKE_CARD:
      return state.map((card) => {
        if (card._id === action.payload.cardId) {
          return {
            ...card,
            likers: card.likers.filter((id) => id !== action.payload.userId),
          };
        }
        return card;
      });
    case UPDATE_CARD:
      return state.map((card) => {
        if (card._id === action.payload.cardId) {
          return {
            ...card,
            message: action.payload.message,
          };
        } else return card;
      });
    case DELETE_CARD:
      return state.filter((card) => card._id !== action.payload.cardId);
    case EDIT_COMMENT:
      return state.map((card) => {
        if (card._id === action.payload.cardId) {
          return {
            ...card,
            comments: card.comments.map((comment) => {
              if (comment._id === action.payload.commentId) {
                return {
                  ...comment,
                  text: action.payload.text,
                };
              } else {
                return comment;
              }
            }),
          };
        } else return card;
      });
    case DELETE_COMMENT:
      return state.map((card) => {
        if (card._id === action.payload.cardId) {
          return {
            ...card,
            comments: card.comments.filter(
              (comment) => comment._id !== action.payload.commentId
            ),
          };
        } else return card;
      });
    default:
      return state;
  }
}
