import React from "react";
import "../../assets/css/common/loading.css";

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};
