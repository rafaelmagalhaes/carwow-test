import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./logo";
import "./nav.scss";
const nav = () => (
  <header className="fixed-top carwow-blue  py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-8 offset-2 d-flex justify-content-center align-items-center">
        <NavLink to="/">
          <Icon className="logo" />
        </NavLink>
      </div>
    </div>
  </header>
);

export default nav;
