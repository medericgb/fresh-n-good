import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <ul>
        <Link to="/">
          <li>Fresh&Good</li>
        </Link>
        <Link to="/recipe">
          <li>Recipe</li>
        </Link>
        <li>
          <a href="https://twitter.com/MMedericjoel">Par Mederic Joel</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
