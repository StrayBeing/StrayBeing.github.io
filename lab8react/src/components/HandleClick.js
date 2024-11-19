import React from "react";

function HandleClick({ setProfile, profile }) {
  const handleClick = () => {
    setProfile({ ...profile, name: "New Name!" });
  };

  return <button onClick={handleClick}>Change Name</button>;
}

export default HandleClick;