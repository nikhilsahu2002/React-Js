import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");
  //   console.log(useState("Enter Text here"));
  const handleUpClick = () => {
    if (text.length !== 0 && text !== text.toUpperCase()) {
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showalert("The Text Been Changed To Upper Case", "success");
    } else {
      props.showalert(
        " The Text Is Empty Or Text Is Already UpperCase",
        "danger"
      );
    }
  };
  const handleLoClick = () => {
    if (text.length !== 0 && text !== text.toLowerCase()) {
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showalert("The Text Been Changed To Lower Case", "success");
    } else {
      props.showalert(
        " The Text Is Empty Or Text Is Already UpperCase",
        "danger"
      );
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("the text being change");
  };

  const handleOnClear = () => {
    if (text.length !== 0) {
      let newtext = text.replace(text, "");
      setText(newtext);
    }
    props.showalert("The Text Is Empty", "danger");
  };
  return (
    <>
      <div>
        <div
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <label htmlFor="myBox" className="form-label">
            {props.Title}
          </label>
        </div>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "gray" : "white",
            color: props.mode === "dark" ? "white" : "#042743", // Add text color
          }}
        ></textarea>
        <br />
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
          type="submit"
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2 "
          onClick={handleLoClick}
          type="submit"
        >
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleOnClear}>
          Convert to Clear Text Area
        </button>
      </div>
      <div
        className="container my-3 mx-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Text Summary Is Here</h1>
        <p>
          the text containes tolal of {text.length} character in the sentance
          and words are{" "}
          {
            text.split(" ").filter((n1) => {
              return n1 != 0;
            }).length
          }
        </p>
        <p>
          Total Time Taken To Read Per Word This Paragraph Will Be{" "}
          {0.008 *
            text.split(" ").filter((n1) => {
              return n1 !== 0;
            }).length}{" "}
          And Per Character is{" "}
          {0.008 *
            text.split(" ").filter((n1) => {
              return n1 != 0;
            }).length}
        </p>
      </div>
    </>
  );
}
