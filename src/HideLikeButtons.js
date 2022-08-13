import React, { useState } from "react";

export default function HideLikeButtons(props) {
  const [isHidden, setIsHidden] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <img
        style={{ height: "200px" }}
        src={props.image}
        alt={props.name}
        onClick={() => (isHidden ? setIsHidden(false) : setIsHidden(true))}
      />
      {isHidden ? (
        <div></div>
      ) : (
        <div>
          <p>Malts: {props.malts}</p>
          <p>Hops: {props.hops}</p>
          <p>Yeast: {props.yeast}</p>
        </div>
      )}
      <button
        className={isLiked ? "liked" : "unliked"}
        onClick={() => (!isLiked ? setIsLiked(true) : setIsLiked(false))}
      >
        Like
      </button>
      {/* <div onClick={() => (!isLiked ? setIsLiked(true) : setIsLiked(false))}>
        {isLiked ? (
          <button style={liked}>Like</button>
        ) : (
          <button style={unliked}>Like</button>
        )}
      </div> */}
    </div>
  );
}
