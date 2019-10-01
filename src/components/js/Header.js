import React from "react";
import ReactDOM from "react-dom";

import "../styles/Header.css";

export class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header-container">
        <nav>Home | Chairs | Tables | Lighting</nav>
      </div>
    );
  }
}
