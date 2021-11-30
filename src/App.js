import logo from "./logo.svg";
import StarPic from "./star.png";
import "./App.css";
//
import { useState, useRef } from "react";
//
function App() {
  const starObj = useRef({ start: null, end: null });
  const [hoverArr, setHoverArr] = useState([]);
  //
  const handleHover = async (e, num) => {
    if (hoverArr.includes(num.num)) {
      if (e.target.style.filter !== "none") {
        e.target.style.filter = "none";
      } else {
        e.target.style.filter = "grayscale(var(--value, 100%))";
      }
    }
  };
  //
  const handleClick = async (e, num) => {
    console.log(starObj);
    let count = num.num;
    let newArr = [];
    //
    if (starObj.current.start === null) {
      starObj.current.start = num.num;
    } else {
      starObj.current.end = num.num;
    }
    //
    if (starObj.current.end === null) {
      while (count !== 5) {
        if (!hoverArr.includes(count)) {
          newArr.push(count);
        }
        count++;
      }
      setHoverArr(newArr);
      //
      if (e.target.style.filter === "none") {
        e.target.style.filter = "grayscale(var(--value, 100%))";
      } else {
        e.target.style.filter = "none";
      }
    }
    //
    console.log("hello", e.target.style.filter, hoverArr);
  };
  //
  const Star = (num) => {
    return (
      <div className={"star-container"}>
        <img
          onClick={(e) => handleClick(e, num)}
          onMouseOver={(e) => handleHover(e, num)}
          src={StarPic}
          alt="Img"
          className={"rated star"}
        />
      </div>
    );
  };
  //
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
