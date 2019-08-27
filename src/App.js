import React, { useState } from "react";
import "./App.css";
import WelcomForms from "./components/WelcomeForms";
import ProfilePage from "./components/ProfilePage";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      {loggedIn ? (
        <ProfilePage username="Cody" />
      ) : (
        <WelcomForms setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
