import axios from "axios";

// CARDS
export const GET_CARDS = "GET_ CARDS";
export const GET_ALL_CARDS = "GET_ALL_ CARDS";
export const ADD_CARD = "ADD_CARD";
export const LIKE_CARD = "LIKE_CARD";
export const UNLIKE_CARD = "UNLIKE_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const DELETE_CARD = "DELETE_CARD";

// comments
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

// errors
export const GET_CARD_ERRORS = "GET_CARD_ERRORS";

export const getCards = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/card/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_CARDS, payload: array });
        dispatch({ type: GET_ALL_CARDS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addCard = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/card/`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_CARD_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_CARD_ERRORS, payload: "" });
        }
      });
  };
};

export const likeCard = (cardId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/post/like-card/` + cardId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: LIKE_CARD, payload: { cardId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const unlikeCard = (cardId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/post/unlike-card/` + cardId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: UNLIKE_CARD, payload: { cardId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const updateCard = (cardId, message) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/card/${cardId}`,
      data: { message },
    })
      .then((res) => {
        dispatch({ type: UPDATE_CARD, payload: { message, cardId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCard = (cardId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/card/${cardId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_CARD, payload: { cardId } });
      })
      .catch((err) => console.log(err));
  };
};

export const addComment = (cardId, commenterId, text, commenterPseudo) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/card/comment-card/${cardId}`,
      data: { commenterId, text, commenterPseudo },
    })
      .then((res) => {
        dispatch({ type: ADD_COMMENT, payload: { cardId } });
      })
      .catch((err) => console.log(err));
  };
};

export const editComment = (cardId, commentId, text) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/card/edit-comment-card/${cardId}`,
      data: { commentId, text },
    })
      .then((res) => {
        dispatch({ type: EDIT_COMMENT, payload: { cardId, commentId, text } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteComment = (cardId, commentId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/card/delete-comment-card/${cardId}`,
      data: { commentId },
    })
      .then((res) => {
        dispatch({ type: DELETE_COMMENT, payload: { cardId, commentId } });
      })
      .catch((err) => console.log(err));
  };
};
