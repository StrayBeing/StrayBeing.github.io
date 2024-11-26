import React, { useState } from "react";

function HandleMouseOver({ profile }) {
  const [showFact, setShowFact] = useState(false);

  const handleMouseOver = () => setShowFact(true);
  const handleMouseOut = () => setShowFact(false);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ padding: "10px", cursor: "pointer" }}
    >
      {showFact ? profile.funFact : "Hover to see fun fact"}
    </div>
  );
}

export default HandleMouseOver;