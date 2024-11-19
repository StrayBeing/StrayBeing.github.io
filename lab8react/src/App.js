import React, { StrictMode, useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ShowImage from "./components/ShowImage";
import HandleClick from "./components/HandleClick";
import HandleMouseOver from "./components/HandleMouseOver";
import LoadDataFromJson from "./components/LoadDataFromJson";
import UploadFile from "./components/UploadFile";
import ChangeStyle from "./components/ChangeStyle";
import BadComponent from "./components/BadComponent";
import GoodComponent from "./components/GoodComponent";

function App() {
  const [profile, setProfile] = useState({
    name: "Click here to change!",
    bio: "This is my profile!",
    funFact: "I love React!",
    image: null,
    style: {},
  });

  return (
    <div className="App">
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
  );
}

export default App;
