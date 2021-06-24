import React from "react";
import MyNavbar from "./navbar.component";
import SiteRoute from "./route.component";

function MainEntrance() {
  console.log("Enter MainEntrance.js.");
  return (
    <div className="App">
      <MyNavbar />
      <SiteRoute />
    </div>
  );
}

export default MainEntrance;
