import React, { useState } from "react";
import "./App.css";
import WelcomForms from "./components/WelcomeForms";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      {loggedIn ? <Dashboard /> : <WelcomForms setLoggedIn={setLoggedIn} />}
    </div>
  );
}

export default App;
