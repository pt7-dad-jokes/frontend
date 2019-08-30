import React, { useState } from "react";
import "./App.css";
import WelcomForms from "./components/WelcomeForms";
// import VerticalNav from "./components/VerticalNav";
import Routes from "./components/Routes";



function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  console.log(localStorage.getItem("token"));
  return (
    <div className="App">
      {loggedIn ? <Routes /> : <WelcomForms setLoggedIn={setLoggedIn} />}
      {/* <VerticalNav /> */}
      
    </div>
  );
}

export default App;
