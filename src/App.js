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
        jokeSetup="What concert costs just 45 cents?"
        jokePunchline="50 Cent featuring Nickelback!"
      />
    </div>
  );
}

export default App;
