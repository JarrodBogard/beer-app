import React from "react";

class BeerCard2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: false,
      isHidden: true,
    };
  }

  handleClick = () => {
    let status = this.state.isLiked ? false : true;
    this.setState({
      isLiked: status,
    });
  };

  handleHidden = () => {
    let status = this.state.isHidden ? false : true;
    this.setState({
      isHidden: status,
    });
  };

  render() {
    const { name, tag, description, abv, image, malts, hops, yeast } =
      this.props;

    return (
      <div>
        <h2>
          {name} - <span>{tag}</span>
        </h2>
        <p>
          {description} <span style={{ color: "black" }}> ABV: {abv}</span>
        </p>

        <div className="img-container">
          <img
            style={{ height: "200px" }}
            src={image}
            alt={name}
            onClick={() => this.handleHidden()}
          />
          {this.state.isHidden ? (
            <div></div>
          ) : (
            <div>
              <p>Malts: {malts}</p>
              <p>Hops: {hops}</p>
              <p>Yeast: {yeast}</p>
            </div>
          )}
        </div>
        <div onClick={() => this.handleClick()}>
          {this.state.isLiked ? (
            <button className="liked">Like</button>
          ) : (
            <button className="unliked">Like</button>
          )}
        </div>
      </div>
    );
  }
}

export default BeerCard2;
