import React, { useState } from "react";

export default function TextForm(prope) {
  const [text, setText] = useState("Enter Text here");
  //   console.log(useState("Enter Text here"));
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("the text being change");
  };

  const handleOnClear = () => {
    let newtext = text.replace(text, "");
    setText(newtext);
  };
  return (
    <>
      <div>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {prope.Title}
          </label>
        </div>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
        <br />
        <button
          className="btn btn-primary"
          onClick={handleUpClick}
          type="submit"
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleLoClick}
          type="submit"
        >
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleOnClear}>
          Convert to Clear Text Area
        </button>
      </div>
      <div className="container my-3">
        <h1>Text Summary Is Here</h1>
        <p>
          the text containes tolal of {text.length} character in the sentance
          and words are {text.split(" ").length}
        </p>
        <p>
          Total Time Taken To Read Per Word This Paragraph Will Be{" "}
          {0.008 * text.split(" ").length} And Per Character is{" "}
          {0.008 * text.length}
        </p>
      </div>
    </>
  );
}
