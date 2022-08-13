import React from "react";
import Button from "./Button";
import InfoCard from "./InfoCard";
import LikeButton from "./LikeButton";
import HideLikeButtons from "./HideLikeButtons";

function BeerCard(props) {
  return (
    <li>
      <h2>
        {props.name}
        <br></br>
        <span>First brewed in: {props.brewed}</span>
      </h2>
      {props.tag}
      <InfoCard
        beers={props.beers}
        handleInfo={props.handleInfo}
        beersInfo={props.beersInfo}
        index={props.index}
        name={props.name}
        image={props.image}
        malts={props.malts}
        hops={props.hops}
        yeast={props.yeast}
      />
      <article>{props.description}</article>
      ABV: {props.abv}
      {/* <LikeButton /> */}
      <Button
        index={props.index}
        id={props.id}
        isLiked={props.isLiked}
        handleLikes={props.handleLikes}
        likedBeers={props.likedBeers}
        beers={props.beers}
      />
      {/* <HideLikeButtons
        image={props.image}
        name={props.name}
        malts={props.malts}
        hops={props.hops}
        yeast={props.yeast}
      /> */}
    </li>
  );
}

export default BeerCard;
