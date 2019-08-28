import React, { useState } from "react";
import "./App.css";
import WelcomForms from "./components/WelcomeForms";
import ProfilePage from "./components/ProfilePage";
import AddJokeForm from "./components/AddJokeForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      {loggedIn ? (
        <ProfilePage username="Cody" />
      ) : (
        <WelcomForms setLoggedIn={setLoggedIn} />
      )}
<AddJokeForm/>

    </div>
  );
}

export default App;
