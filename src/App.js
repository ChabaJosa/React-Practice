import logo from "./logo.svg";
import StarPic from "./star.png";
import "./App.css";

import { useState } from "react";

function App() {
  const [currentStar, setcurrentStar] = useState();
  //
  const handleHover = async (e, num) => {
    // console.log(e);
    await setcurrentStar(num);
    let starArr = document.getElementsByClassName("star");
    // console.log(starArr[0].style)
    if (starArr.length > 0) {
      for (let i = currentStar; i === 0; i--) {
        console.log(starArr[i]);
        if (i >= num) {
          starArr[i].style.filter = "none";
        } else {
          // return;
        }
      }
    }
  };
  //
  const Star = (num) => {
    return (
      <div className={"star-container"}>
        <img
          onMouseOver={(e) => handleHover(e, num)}
          src={StarPic}
          alt="Img"
          className={"rated star"}
        />
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Rating</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            minHeight: "150px",
            minWidth: "150px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Star num={0} />
          <Star num={1} />
          <Star num={2} />
          <Star num={3} />
          <Star num={4} />
        </div>
      </header>
    </div>
  );
}

export default App;
