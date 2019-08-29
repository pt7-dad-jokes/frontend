import React, { useState } from "react";
import "./App.css";
import WelcomForms from "./components/WelcomeForms";
<<<<<<< HEAD
import ProfilePage from "./components/ProfilePage";
import VerticalNav from "./components/VerticalNav"
=======
import Dashboard from "./components/Dashboard";
>>>>>>> 8fe27a5943ae6ecfbccf666d2726ea6d6ea02928

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  console.log(localStorage.getItem("token"));
  return (
    <div className="App">
<<<<<<< HEAD
      {loggedIn ? (
        <ProfilePage username="Cody" />
      ) : (
        <WelcomForms setLoggedIn={setLoggedIn} />
      )}
<VerticalNav/>
=======
      {loggedIn ? <Dashboard /> : <WelcomForms setLoggedIn={setLoggedIn} />}
>>>>>>> 8fe27a5943ae6ecfbccf666d2726ea6d6ea02928
    </div>
  );
}

export default App;
