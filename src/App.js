import React from "react";
import "./App.css";
import WelcomForms from "./components/WelcomeForms";
import JokesCard from "./components/JokesCard";

function App() {
  return (
    <div className="App">
      <WelcomForms />
      <JokesCard
        username="Cody"
        jokeSetup="Why did the chicken cross the road?"
        jokePunchline="To get to the KFC"
      />
    </div>
  );
}

export default App;
