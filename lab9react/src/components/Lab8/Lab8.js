import React, { StrictMode, useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import ShowImage from "./ShowImage";
import HandleClick from "./HandleClick";
import HandleMouseOver from "./HandleMouseOver";
import LoadDataFromJson from "./LoadDataFromJson";
import UploadFile from "./UploadFile";
import ChangeStyle from "./ChangeStyle";
import BadComponent from "./BadComponent";
import GoodComponent from "./GoodComponent";
import './Lab8.css';
const Lab8 = () => {
  const [profile, setProfile] = useState({
    name: "Click here to change!",
    bio: "This is my profile!",
    funFact: "I love React!",
    image: null,
    style: {},
  });

  return (
    <div>

      {/* Zawartość Lab 8 */}
      <div className="lab8">
        <h1>Profile Editor</h1>
        <StrictMode>
          <div className="components-container">
            <div className="component-container">
              <h2>Bad Component:</h2>
              <BadComponent />
            </div>
            <div className="component-container">
              <h2>Good Component:</h2>
              <GoodComponent initialCount={0} />
            </div>
          </div>
        </StrictMode>
        <div className="separator"></div>
        <div className="profile-editor-container">
          <div className="profile-card-container">
            <ProfileCard profile={profile} setProfile={setProfile} />
          </div>
        </div>
        <HandleClick setProfile={setProfile} profile={profile} />
        <HandleMouseOver profile={profile} />
        <ShowImage setProfile={setProfile} profile={profile} />
        <LoadDataFromJson setProfile={setProfile} />
        <UploadFile setProfile={setProfile} />
        <ChangeStyle setProfile={setProfile} profile={profile} />
      </div>
    </div>
  );
};

const styles = {
  mainNav: {
    backgroundColor: "#333",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    margin: "0 15px",
  },
  activeLink: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

export default Lab8;
