import React from "react";
import "./App.scss";

import LeftBar from "./Components/LeftBar/LeftBar";
import Center from "./Components/Center/Center";
import RightBar from "./Components/RightBar/RightBar";

function App() {
  return (
    <>
      <div className="feed container">
        <LeftBar />
        <Center />
        <RightBar />
      </div>
    </>
  );
}

export default App;
