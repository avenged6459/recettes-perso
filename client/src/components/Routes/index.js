import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "../../Navbar";
import Dessert from "../../pages/Dessert";
import Entree from "../../pages/Entree";
import Home from "../../pages/Home";
import Plat from "../../pages/Plats";
import Profil from "../../pages/Profil";
import Lasagne from "../Recettes/plats/Lasagne";
const index = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/entree" exact component={Entree} />
        <Route path="/plat" exact component={Plat} />
        <Route path="/dessert" exact component={Dessert} />
        <Route path="/profil" exact component={Profil} />

        {/* recettes */}
        <Route path="/lasagne" exact component={Lasagne} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
