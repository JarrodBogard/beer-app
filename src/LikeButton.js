import React, { useState } from "react";
import Heart from "react-heart";

export default function LikeButton() {
  const [active, setActive] = useState(false);
  return (
    <div style={{ width: "2rem" }}>
      <Heart isActive={active} onClick={() => setActive(!active)} />
    </div>
  );
}
