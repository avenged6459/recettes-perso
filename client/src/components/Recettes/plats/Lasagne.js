import React from "react";

const Lasagne = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="header-card">
          <img
            className="img-header-card"
            src="./img/lasagne.jpg"
            alt="plat de lasagne"
          />
        </div>
        <h3 className="titre-recette">Lasagne (pour 4 personnes)</h3>
        <div className="main-card">
          <div className="ingredients">
            <input
              className="recipe-ingredients__qt-counter__value title-5"
              type="text"
              value="4"
              min="1"
              max="20"></input>

            <h4>Ingrédients:</h4>

            <ul>
              <li>Feuilles pâte à lasagne</li>
              <li>Boeuf</li>
              <li>Sauce tomate</li>
              <li>Huile d'olive</li>
              <li>Ail</li>
              <li>Oignon</li>
              <li>Persil</li>
              <li>Thym</li>
              <li>Basilic</li>
              <li>Gruyère</li>
              <li>Lait</li>
              <li>Farine</li>
              <li>Muscade</li>
              <li>Sel</li>
              <li>Poivre</li>
            </ul>
          </div>

          <div className="preparation">
            <h4>Préparation:</h4>
            <ol>
              <li>Préchauffer le four a 180°, thermostat 6</li>
              <li>Emiétter le haché de boeuf</li>
              <li>Couper en petits dés l'oignon et l'ail</li>
              <li>
                Les faire revenir a feu moyen dans un poele avec un peu d'huile
                d'olive
              </li>
              <li>
                Y ajouter le boeuf haché et mélanger avec l'ail et l'oignon
              </li>
              <li>
                Une fois que la viande commence a cuire y ajouter la sauce
                tomate
              </li>
              <li>Bien mélanger a la viande</li>
              <li>Ajouter le thym, le basilic et le persil</li>
              <li>
                une fois la viande presque cuite, sortir la poêle du feu, saler
                et poivrer.
              </li>
              <li>
                Dans un casserole verser le lait et le faire chauffer a feu
                doux.
              </li>
              <li>
                Une fois tiède, y ajouter petit a petit la farine tout en
                remuant pour éviter les grumeaux
              </li>
              <li>
                Quand la béchamel a la bonne texture la sortir du feu, y
                incorporer la muscade le sel et le poivre
              </li>
              <li>
                Prendre un plat rectangulaire et y déposer les feuilles de
                lasagne{" "}
              </li>
              <li>
                étaler une couche de viande (environ la moitié de la poêle){" "}
              </li>
              <li>
                Recouvrir de feuilles de lasagne et y étaler une couche de
                béchamel
              </li>
              <li>
                Remetter des feuilles de lasagnes et y déposer le reste de
                viande
              </li>
              <li>
                Mettre une derniere fois des feuilles de lasagne, y déposer une
                couche de béchamel et recouvrir de gruyère rapé
              </li>
              <li> mettre au four entre 20 et 30 minutes</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lasagne;
