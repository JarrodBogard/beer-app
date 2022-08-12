import React, { useState } from "react";
import Button from "./Button";

function BeerCard(props) {
  const [isHidden, setHidden] = useState(true);
  // const [isLiked, setLiked] = useState(false);

  return (
    <li>
      <h2>
        {props.name}
        <br></br>
        <span>First brewed in: {props.brewed}</span>
      </h2>
      {props.tag}
      <img
        style={{ height: "200px" }}
        src={props.image}
        alt={props.name}
        onClick={() => (isHidden ? setHidden(false) : setHidden(true))}
        // onClick={() => handleHidden()}
      ></img>
      {isHidden ? (
        <div></div>
      ) : (
        <div>
          <p>Malts: {props.malts}</p>
          <p>Hops: {props.hops}</p>
          <p>Yeast: {props.yeast}</p>
        </div>
      )}
      <article>{props.description}</article>
      ABV: {props.abv}
      <Button
        index={props.index}
        id={props.id}
        isLiked={props.isLiked}
        handleLikes={props.handleLikes}
        likedBeers={props.likedBeers}
        beers={props.beers}
      />
    </li>
  );
}

export default BeerCard;
