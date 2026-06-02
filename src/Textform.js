import React, { useState } from "react";
import translate from "translate";

export default function Textform(props) {
  const [text, setText] = useState("");

  const onUpclick = () => {
    console.log("Your function Click!!!!");
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const onLoclick = () => {
    console.log("Your function Click!!!!");
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const onUpChange = (event) => {
    console.log("On change!!!!");
    setText(event.target.value);
  };

  const convertGujarati = async () => {
    try {
      let result = await translate(text, {
        to: "gu",
      });

      setText(result || "");
    } catch (error) {
      console.log(error);
      alert("Translation Error");
    }
  };

  const convertHindi = async () => {
    try {
      let result = await translate(text, {
        to: "hi",
      });

      setText(result || "");
    } catch (error) {
      console.log(error);
      alert("Translation Error");
    }
  };

  const [textColor, setTextColor] = useState("black");

  const changeColor = () => {
    if (textColor === "black") {
      setTextColor("red");
    } else {
      setTextColor("blue");
    }
  };

  const [bgColor, setBgColor] = useState("white");

  const toggleDarkMode = () => {
    if (bgColor === "white") {
      setBgColor("black");
      setTextColor("white");
    } else {
      setBgColor("white");
      setTextColor("black");
    }
  };

  const [isBold, setIsBold] = useState(false);

  const makeBold = () => {
    setIsBold(!isBold);
  };

  return (
    <>
      <div>
        <h1>{props.title}</h1>

        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={onUpChange}
            rows="8"
            style={{
              color: textColor,
              backgroundColor: bgColor,
              fontWeight: isBold ? "bold" : "normal",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mt-3" onClick={onUpclick}>
          Convert Upper Case
        </button>

        <button className="btn btn-primary mt-3 mx-3" onClick={onLoclick}>
          Convert Lower Case
        </button>

        <button
          className="btn btn-primary mt-3 mx-3"
          onClick={convertGujarati}
        >
          Convert Gujarati
        </button>

        <button
          className="btn btn-primary mt-3 mx-3"
          onClick={convertHindi}
        >
          Convert Hindi
        </button>

        <button className="btn btn-primary mt-3 mx-3" onClick={changeColor}>
          Change Color
        </button>

        <button className="btn btn-dark mt-3 mx-3" onClick={makeBold}>
          Bold Text
        </button>

        <button
          className="btn btn-secondary mt-3 mx-3"
          onClick={toggleDarkMode}
        >
          Dark Mode
        </button>
      </div>

      <div className="container-fluid">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} Time</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}