import React, { useState } from "react";
import "./App.css";
import WelcomForms from "./components/WelcomeForms";
import ProfilePage from "./components/ProfilePage";
import VerticalNav from "./components/VerticalNav"

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      {loggedIn ? (
        <ProfilePage username="Cody" />
      ) : (
        <WelcomForms setLoggedIn={setLoggedIn} />
      )}
<VerticalNav/>
    </div>
  );
}

export default App;
