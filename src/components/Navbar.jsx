import React from "react";
import earth from "/public/assets/earth.png";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <img src={earth} alt="earth image" />
        <h3>My travel Journal</h3>
      </div>
    </>
  );
}
