import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <NavLink to="/lasagne" exact>
        <img
          className="img-header-card"
          src="./img/lasagne.jpg"
          alt="lasagnes"
        />
      </NavLink>
    </div>
  );
};

export default Home;
