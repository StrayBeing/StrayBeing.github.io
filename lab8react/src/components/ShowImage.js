import React from "react";

function ShowImage({ setProfile, profile }) {
  const showImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, image: imageUrl });
    }
  };

  return (
    <div>
      <label htmlFor="image-uploader" style={{ marginRight: "10px" }}>
        Upload Profile Image:
      </label>
      <input
        id="image-uploader"
        type="file"
        accept="image/*"
        onChange={showImage}
      />
    </div>
  );
}

export default ShowImage;