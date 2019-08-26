import React from "react";
import "./App.css";
import WelcomForms from "./components/WelcomeForms";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      <WelcomForms />
      <ProfilePage username="CodyC" />
    </div>
  );
}

export default App;
