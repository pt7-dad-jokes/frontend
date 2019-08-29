import React, { useState } from "react";
import "./App.css";
import WelcomForms from "./components/WelcomeForms";
// import VerticalNav from "./components/VerticalNav";
import LoginForm from "./components/LoginForm";
import RegForm from "./components/RegForm";
import AddJoke from "./components/AddJokeForm";
import ProfilePage from "./components/ProfilePage";
import Dashboard from "./components/Dashboard";
import { Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  console.log(localStorage.getItem("token"));
  return (
    <div className="App">
      {loggedIn ? <Dashboard /> : <WelcomForms setLoggedIn={setLoggedIn} />}
      {/* <VerticalNav /> */}
      <Route exact path="/auth/accounts" component={LoginForm}></Route>
      <Route path="/auth/accounts" component={RegForm}></Route>
      <Route path="/jokes" component={Dashboard}></Route>
      <Route
        path="/auth/accounts"
        render={props => <ProfilePage {...props} username="U" />}
      ></Route>
      <Route path="/jokes" component={AddJoke}></Route>
    </div>
  );
}

export default App;
