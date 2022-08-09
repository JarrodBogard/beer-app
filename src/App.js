import React from "react";
import axios from "axios";
import "./App.css";

import BeerCard from "./BeerCard";
import { nanoid } from "nanoid";
import BeerCard2 from "./BeerCard2";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      beers: [],
      likedBeers: [],
    };
  }

  handleLikes = (index) => {
    // console.log(name);
    console.log("liked button clicked", index);
    let likedBeerCopy = [];
    let likedBeer = this.state.beers[index];
    likedBeerCopy.splice(index, 1, likedBeer);
    console.log("likedBeer", likedBeerCopy);
    this.setState({
      likedBeers: this.state.likedBeers.concat(likedBeer),
    });
    // this.setState({
    //   likedBeers: this.state.likedBeers.concat(
    //     this.state.beers.slice(index, index + 1)
    //   ),
    // });
  };

  isLiked = (index) => {
    setTimeout(() => {
      let beerArray = this.state.beers;
      let likedBeerCopy = this.state.likedBeers;
      let beerFilter = likedBeerCopy.find((el) => el === beerArray[index]);
      if (beerFilter) {
        console.log("isLike is true");
        return true;
      } else {
        console.log("isLiked is false");
        return false;
      }
    }, 50);
  };

  // handleHidden = () => {
  //   let status = this.state.isHidden ? false : true;
  //   this.setState({
  //     isHidden: status,
  //   });
  // };

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const beers = res.data;
      this.setState({ beers });
      // console.log(beers);
    });
  }

  componentDidUpdate() {
    console.log("likedBeers", this.state.likedBeers);
    // console.log("isHidden", this.state.isHidden);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <ol style={{ listStyle: "none" }}>
            {this.state.beers.map((beer, index) => {
              return (
                <BeerCard2
                  key={nanoid()}
                  index={index}
                  name={beer.name}
                  image={beer.image_url}
                  tag={beer.tagline}
                  brewed={beer.first_brewed}
                  description={beer.description}
                  abv={beer.abv}
                  handleLikes={this.handleLikes}
                  likedBeers={this.state.likedBeers}
                  isLiked={this.isLiked}
                  malts={beer.ingredients.malt[0].name}
                  hops={beer.ingredients.hops[0].name}
                  yeast={beer.ingredients.yeast}
                  handleHidden={this.handleHidden}
                  // isHidden={this.state.isHidden}
                />
              );
            })}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
