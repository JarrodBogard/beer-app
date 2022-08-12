import React from "react";

export default function InfoCard(props) {
  return (
    <div>
      <img
        style={{ height: "200px" }}
        src={props.image}
        alt={props.name}
        onClick={() => props.handleInfo(props.index)}
      />
      {props.beersInfo.includes(props.beers[props.index]) ? (
        <div>
          <p>Malts: {props.malts}</p>
          <p>Hops: {props.hops}</p>
          <p>Yeast: {props.yeast}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
