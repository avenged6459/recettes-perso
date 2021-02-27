import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";
import FollowHandler from "../Profil/FollowHandler";
import LikeButton from "./LikeButton";
import { updateCard } from "../../actions/card.actions";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";

const Card = ({ card }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updateCard(card._id, textUpdate));
    }
    setIsUpdated(false);
  };

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={card._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === card.posterId) return user.picture;
                    else return null;
                  })
                  .join("")
              }
              alt="poster-pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === card.posterId) return user.pseudo;
                        else return null;
                      })
                      .join("")}
                </h3>
                {card.posterId !== userData._id && (
                  <FollowHandler idToFollow={card.posterId} type={"card"} />
                )}
              </div>
              <span>{dateParser(card.createdAt)}</span>
            </div>
            {isUpdated === false && <p>{card.message}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={card.message}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider modification
                  </button>
                </div>
              </div>
            )}
            {card.picture && (
              <img src={card.picture} alt="card-pic" className="card-pic" />
            )}
            {card.video && (
              <iframe
                width="500"
                height="300"
                src={card.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={card._id}></iframe>
            )}
            {userData._id === card.posterId && (
              <div className="button-container">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <img src="./img/icons/edit.svg" alt="edit" />
                </div>
                <DeleteCard id={card._id} />
              </div>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <img
                  onClick={() => setShowComments(!showComments)}
                  src="./img/icons/message1.svg"
                  alt="comment"
                />
                <span>{card.comments.length}</span>
              </div>
              <LikeButton card={card} />
              <img src="./img/icons/share.svg" alt="share" />
            </div>
            {showComments && <CardComments card={card} />}
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
