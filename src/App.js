import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

import Alert from "./Components/Alert";

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      ShowAlert("Dark Mode Enable", "success");
      document.title = "TextUtiles - Dark";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("Dark Mode Disable", "success");
      document.title = "TextUtiles - light";
    }
  };

  const [alert, setAlert] = useState(null);
  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm
          showalert={ShowAlert}
          Title="Enter The Text To Anyize"
          mode={mode}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
