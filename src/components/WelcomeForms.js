import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import WelcomeButtons from "./WelcomeButtons";

function WelcomeForms() {
  const [formState, setFormState] = useState("signup");

  return (
    <div>
      <LoginForm formState={formState} />
      <WelcomeButtons formState={formState} setFormState={setFormState} />
    </div>
  );
}

export default WelcomeForms;
