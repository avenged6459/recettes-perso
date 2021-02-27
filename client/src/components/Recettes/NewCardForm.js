import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, timestampParser } from "../Utils";
import { addCard, getCards } from "../../actions/card.actions";

const NewCardForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [titre, setTitre] = useState("");
  const [list, setList] = useState("");
  const [message, setMessage] = useState("");
  const [cardPicture, setCardPicture] = useState(null);
  const [video, setVideo] = useState("");
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.postError);
  const dispatch = useDispatch();

  const handlePost = async () => {
    if (message || cardPicture || video) {
      const data = new FormData();
      data.append("posterId", userData._id);
      data.append("titre", titre);
      data.append("list", list);
      data.append("message", message);
      if (file) data.append("file", file);
      data.append("video", video);

      await dispatch(addCard(data));
      dispatch(getCards());
      cancelCard();
    } else {
      alert("Veuillez entrer un message");
    }
  };

  const handlePicture = (e) => {
    setCardPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    setVideo("");
  };
  //liste
  const addListItem = (e) => {
    const dataList = new FormData();

    dataList.append("ingredientItems", list);
  };

  const cancelCard = () => {
    setTitre("");
    setList("");
    setMessage("");
    setCardPicture("");
    setVideo("");
    setFile("");
  };

  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);

    const handleVideo = () => {
      let findLink = message.split(" ");
      for (let i = 0; i < findLink.length; i++) {
        if (
          findLink[i].includes("https://www.yout") ||
          findLink[i].includes("https://yout")
        ) {
          let embed = findLink[i].replace("watch?v=", "embed/");
          setVideo(embed.split("&")[0]);
          findLink.splice(i, 1);
          setMessage(findLink.join(" "));
          setCardPicture("");
        }
      }
    };
    handleVideo();
  }, [userData, message, video]);

  return (
    <div className="post-container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
          <div className="post-form">
            <div className="card-header">
              <img src="" alt="" />

              <textarea
                className="titre"
                name="titre"
                id="titre"
                placeholder="titre de la recette"
                onChange={(e) => setTitre(e.target.value)}
                value={titre}>
                {" "}
              </textarea>
            </div>
            <div className="main-card">
              <h4>Ingredients:</h4>
              <ul className="ingredientItems">
                <button onClick={addListItem}> ajouter un ingrédient</button>
              </ul>

              <h4>Préparation:</h4>
              <ol>
                <li></li>
                <li></li>
                <li></li>
              </ol>
            </div>
            <div className="footer-card"></div>

            {titre || list || cardPicture || video.length > 20 ? (
              <li className="card-container">
                <div className="card-left">
                  <img src={userData.picture} alt="user-pic" />
                </div>
                <div className="card-right">
                  <div className="card-header">
                    <div className="pseudo">
                      <h3>{userData.pseudo}</h3>
                    </div>
                    <span>{timestampParser(Date.now())}</span>
                  </div>
                  <div className="content">
                    <p>{titre}</p>
                    <img src={cardPicture} alt="" />
                    {video && (
                      <iframe
                        src={video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video}></iframe>
                    )}
                  </div>
                </div>
              </li>
            ) : null}
            <div className="footer-form">
              <div className="icon">
                {isEmpty(video) && (
                  <>
                    <img src="./img/icons/picture.svg" alt="img" />
                    <input
                      type="file"
                      id="file-upload"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handlePicture(e)}
                    />
                  </>
                )}
                {video && (
                  <button onClick={() => setVideo("")}>Supprimer video</button>
                )}
              </div>
              {!isEmpty(error.format) && <p>{error.format}</p>}
              {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
              <div className="btn-send">
                {message || cardPicture || video.length > 20 ? (
                  <button className="cancel" onClick={cancelCard}>
                    Annuler message
                  </button>
                ) : null}
                <button className="send" onClick={handlePost}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewCardForm;
