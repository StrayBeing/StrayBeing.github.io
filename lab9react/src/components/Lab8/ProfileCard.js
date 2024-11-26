import React, { useState } from "react";

function ProfileCard({ profile, setProfile }) {
  const [showFunFact, setShowFunFact] = useState(false);

  const handleMouseEnter = () => {
    setShowFunFact(true);
  };

  const handleMouseLeave = () => {
    setShowFunFact(false);
  };

  return (
    <div
      className="profile-card"
      style={profile.style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      {profile.image && <img src={profile.image} alt="Profile" />}
      {showFunFact && (
        <p style={{ fontStyle: "italic", color: "gray" }}>
          Fun Fact: {profile.funFact}
        </p>
      )}
    </div>
  );
}

export default ProfileCard;