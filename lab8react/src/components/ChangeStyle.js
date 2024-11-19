import React from "react";

function ChangeStyle({ setProfile, profile }) {
  const changeStyle = () => {
    setProfile({
      ...profile,
      style: {
        border: "2px dashed red",
        padding: "20px",
        backgroundColor: "#f0f0f0",
      },
    });
  };

  return <button onClick={changeStyle}>Change Style</button>;
}

export default ChangeStyle;