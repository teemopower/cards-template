import React from "react";

import "../styles/Cards.css";

export class Cards extends React.Component {
  constructor(props) {
    super(props);
    console.log("cards", this.props.data);

    //should be passed in from parent or using reducer data from parent
    // this.itemsArray = [
    //   {
    //     name: "Mid Century Chair",
    //     src:
    //       "https://images-na.ssl-images-amazon.com/images/I/91lobduWCnL._SX425_.jpg",
    //     description: "Grey cloth w/ handcrafted wood"
    //   },
    //   {
    //     name: "Hemnes",
    //     src:
    //       "https://www.ikea.com/us/en/images/products/teodores-chair-green__0551563_PE658679_S4.JPG",
    //     description: "Classic brown leather with handcrafted wood"
    //   },
    //   {
    //     name: "Strandmon",
    //     src:
    //       "https://www.ikea.com/us/en/images/products/strandmon-wing-chair-brown__0392556_PE560378_S4.JPG",
    //     description: "IKEA elegant nice chair"
    //   },
    //   {
    //     name: "Teodores",
    //     src:
    //       "https://www.ikea.com/us/en/images/products/strandmon-children-s-armchair-gray__0729754_PE737122_S4.JPG",
    //     description:
    //       "A comfy chair that’s sturdy, yet lightweight and stackable too"
    //   }
    // ];
  }

  componentWillMount() {}

  render() {
    const { data } = this.props;

    return (
      <div className="cards-row">
        {data.map((val, index) => {
          return (
            <div className="cards-container" key={index}>
              <div className="cards-body">
                <div className="cards-header">{val.name}</div>
                <div className="cards-img">
                  <img src={val.src} alt="" />
                </div>
                <div className="cards-description">{val.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
