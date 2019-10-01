import React from "react";

import { Cards } from "./Cards";

import "../styles/Main.css";

export class Main extends React.Component {
  constructor(props) {
    super(props);

    console.log("main", this.props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-header">Chairs</div>
        <Cards data={this.props.data} />
      </div>
    );
  }
}
