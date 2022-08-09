import React, { useState } from "react";

function BeerCard(props) {
  const [isHidden, setHidden] = useState(true);
  // const [isLiked, setLiked] = useState(false);

  const {
    index,
    name,
    brewed,
    tag,
    image,
    description,
    abv,
    malts,
    hops,
    yeast,
    likedBeers,
    handleLikes,
    isLiked,
    // handleHidden,
    // isHidden,
  } = props;

  // let likeText;
  // if (isLiked) {
  //   likeText = "Unlike";
  // } else likeText = "Like";

  return (
    <li>
      <h2>
        {name}
        <br></br>
        <span>First brewed in: {brewed}</span>
      </h2>
      {tag}
      <img
        style={{ height: "200px" }}
        src={image}
        alt={name}
        onClick={() => (isHidden ? setHidden(false) : setHidden(true))}
        // onClick={() => handleHidden()}
      ></img>
      {isHidden ? (
        <div></div>
      ) : (
        <div>
          <p>Malts: {malts}</p>
          <p>Hops: {hops}</p>
          <p>Yeast: {yeast}</p>
        </div>
      )}
      <article>{description}</article>
      ABV: {abv}
      {/* <button onClick={() => (isLiked ? setLiked(false) : setLiked(true))}>
        {isLiked ? "Unlike" : "Like"} */}
      <button onClick={() => handleLikes(index)}>
        {isLiked ? "Unlike" : "Like"}
        {/* {likeText} */}
      </button>
    </li>
  );
}

export default BeerCard;

// // turn your functional component into a class-based component so you can create local state

// import React, { Component } from 'react'

// class MyConditionalComponent extends Component {
//   constructor(props) {
//     super(props)

//     /* inside the constructor, initiate the state as an object and give it the keys you want to use, in this case we'll use a property called isHidden so we know what it's for. */

//     this.state = {
//       isHidden: true
//     }
//   }

// /* Remember from 211 that classes are functions that return an object with a context or instance of which will require/allow us to use the `this` keyword. */

//   /* because the component is a class we can also create and use our own methods: */

//   handleClick = () => {
//     /* What you see below is a ternary operator. It reads like this: "if `this.state.isHidden` is true - set status to be false , else set it to true". */

//   let status = this.state.isHidden == true ? false : true

//     /* Because we have the variable status set to be the opposite of whatever `this.state.isHidden` equals... */

//     /* ...we can use its value to set `this.state.isHidden` when our button is clicked.*/

//     /* Notice we use the `.setState({})` method to change values in our state object. */

//   this.setState({
//     isHidden: status
//     })
//   }

//   render() {
//     /* then we check if the value in state is true or false and render accordingly */
//     if (this.state.isHidden) {
//       return (
//         /* if the user clicks this component it will trigger the `handleClick` method which changes the state and then forces the parent component to re-render, which will render the `<UserDetailsCard />` component as well and vice versa! */
//         <UserNameCard revealClick={this.handleClick} userId={props.user.id}/>
//       )
//     } else {
//       return (
//         <div>
//           <UserNameCard userId={props.user.id}/>
//           <UserDetailsCard hideClick={this.handleClick} userId={props.user.id} />
//         </div>
//       )
//     }
//   }
// }
