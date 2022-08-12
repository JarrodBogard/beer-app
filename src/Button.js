import React, { useEffect } from "react";

export default function Button({
  isLiked,
  index,
  handleLikes,
  likedBeers,
  beers,
}) {
  // const { isLiked, index, handleLikes, likedBeers } = props;

  useEffect(() => {
    // console.log("likedBeer", likedBeers[index]);
    // console.log("beer", beers[index]);
  });

  // let status = isLiked ? false : true;

  // toggle function
  // function changeStatus(props) {
  //   let status = props.isLiked ? "false" : "true";
  //   return props.isLiked(status);
  // }

  return isLiked && likedBeers.includes(beers[index]) ? (
    <button className="liked" onClick={() => handleLikes(index)}>
      Like
    </button>
  ) : (
    <button className="unliked" onClick={() => handleLikes(index)}>
      Like
    </button>
  );
}

////////////////////////////////////////////////////////////////////
// code snippets that didn't work

// let likeText;
// if (isLiked) {
//   likeText = "Unlike";
// } else likeText = "Like";

// handleLikes = (index) => {
// console.log(name);
// console.log("liked button clicked", index);
// let likedBeersCopy = [];
// let likedBeer = this.state.beers[index];
// if (!likedBeersCopy.includes(index)) {
// likedBeersCopy.splice(index, 1, likedBeer);
// }
// console.log("likedBeer", likedBeersCopy);
// this.setState({
//   likedBeers: [...this.state.likedBeers, likedBeer],
// likedBeers: [...this.state.likedBeers, ...likedBeersCopy],
// likedBeers: this.state.likedBeers.concat(likedBeersCopy),
// });
// this.setState({
//   likedBeers: this.state.likedBeers.concat(
//     this.state.beers.slice(index, index + 1)
//   ),
// });
// };

// {
//   /* <button onClick={() => (isLiked ? setLiked(false) : setLiked(true))}>
//         {isLiked ? "Unlike" : "Like"} */
// }
// {
//   /* <button onClick={() => handleLikes(index)}> */
// }
// {
//   /* {isLiked(index) ? "Unlike" : "Like"} */
// }
// {
//   /* {likeText} */
// }
// {
//   /* </button> */
// }
