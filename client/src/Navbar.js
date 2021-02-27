import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./components/AppContext";
import Logout from "./components/Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/icon.svg" alt="" />
              <h3>Marmiton perso</h3>
            </div>
          </NavLink>
          <div>
            <NavLink to="/" exact>
              Accueil
            </NavLink>
            <NavLink to="/entree" exact>
              Entrée
            </NavLink>
            <NavLink to="/plat" exact>
              Plat
            </NavLink>
            <NavLink to="/dessert" exact>
              Dessert
            </NavLink>
            <NavLink to="/profil" exact>
              Mon compte
            </NavLink>
          </div>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>Bienvenue {userData.pseudo} </h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <img src="./img/icons/login.svg" alt="login" />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
