import React from "react";

function LoadDataFromJson({ setProfile }) {
  const loadDataFromJson = async () => {
    try {
      const response = await fetch("/lab8/example.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProfile({ ...data });
    } catch (error) {
      console.error("Error loading JSON:", error);
    }
  };

  return <button onClick={loadDataFromJson}>Load Example Data</button>;
}

export default LoadDataFromJson;
