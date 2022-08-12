import React from "react";
import axios from "axios";
import "./App.css";

import BeerCard from "./BeerCard";
import { nanoid } from "nanoid";
// import BeerCard2 from "./BeerCard2";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      beers: [],
      likedBeers: [],
      beersInfo: [],
    };
  }

  handleInfo = (index) => {
    console.log("info clicked at index: ", index);
    let beersInfoCopy = [];
    let beerInfo = this.state.beers[index];
    console.log("beerInfo", beerInfo);
    beersInfoCopy.splice(index, 1, beerInfo);
    console.log("beersInfoCopy", beersInfoCopy);
    if (!this.state.beersInfo.includes(beerInfo))
      this.setState({
        beersInfo: [...this.state.beersInfo, beerInfo],
      });
  };

  handleLikes = (index) => {
    console.log("liked button clicked", index);
    let likedBeersCopy = [];
    let likedBeer = this.state.beers[index];
    likedBeersCopy.splice(index, 1, likedBeer);
    console.log("likedBeer", likedBeersCopy);
    if (!this.state.likedBeers.includes(likedBeer))
      this.setState({
        // likedBeers: [...this.state.likedBeers, likedBeer],
        likedBeers: this.state.likedBeers.concat(likedBeersCopy),
      });
  };

  // do i even need this function, seems to work without it on the button component //
  isLiked = (index) => {
    setTimeout(() => {
      let beerArray = this.state.beers;
      let likedBeerCopy = this.state.likedBeers;
      let beerFilter = likedBeerCopy.find((el) => el === beerArray[index]);
      if (beerFilter) {
        return true;
      } else {
        return false;
      }
    }, 50);
  };

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const beers = res.data;
      this.setState({ beers });
    });
  }

  componentDidUpdate(index) {
    console.log("beers", this.state.beers);
    console.log("likedBeers", this.state.likedBeers);
    console.log("beersInfo", this.state.beersInfo);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <ol style={{ listStyle: "none" }}>
            {this.state.beers.map((beer, index) => {
              return (
                <BeerCard
                  key={nanoid()}
                  index={index}
                  name={beer.name}
                  image={beer.image_url}
                  tag={beer.tagline}
                  brewed={beer.first_brewed}
                  description={beer.description}
                  abv={beer.abv}
                  handleLikes={this.handleLikes}
                  isLiked={this.isLiked}
                  malts={beer.ingredients.malt[0].name}
                  hops={beer.ingredients.hops[0].name}
                  yeast={beer.ingredients.yeast}
                  likedBeers={this.state.likedBeers}
                  beers={this.state.beers}
                  handleInfo={this.handleInfo}
                  beersInfo={this.state.beersInfo}
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
