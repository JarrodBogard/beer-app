import React, { useState } from "react";
import TwitterLikeButton from "twitter-like-button";

export default function HeartButton({
  isLiked,
  index,
  handleLikes,
  likedBeers,
  beers,
}) {
  const [state, setState] = useState(false);
  return (
    <div>
      <TwitterLikeButton isClicked={state} onClick={(e) => setState(e)} />
    </div>
  );
}

//  {/* <HeartButton
//         isLiked={props.isLiked}
//         index={props.index}
//         handleLikes={props.handleLikes}
//         likedBeers={props.likedBeers}
//         beers={props.beers}
//       /> */}

//   return isLiked && likedBeers.includes(beers[index]) ? (
//     <div className="liked" onClick={() => handleLikes(index)}>
//          <TwitterLikeButton isLiked={state} onClick={(e) => setState(e)} />
//     </div>
//   ) : (
//     <div className="unliked" onClick={() => handleLikes(index)}>
//          <TwitterLikeButton isLiked={state} onClick={(e) => setState(e)} />
//     </div>
//   );
// }
