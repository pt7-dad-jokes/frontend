import React, { useState } from "react";
import LoginForm from "./LoginForm";
import WelcomeButtons from "./WelcomeButtons";
import ForgotPasswordForm from "./ForgotPasswordForm";
import RegForm from "./RegForm";

function WelcomeForms({ setLoggedIn }) {
  // 3 form states login, forgotPassword and signup
  const [formState, setFormState] = useState("login");

  return (
    <div>
      <LoginForm formState={formState} setLoggedIn={setLoggedIn} />
      <ForgotPasswordForm formState={formState} />
      <RegForm formState={formState} />
      <WelcomeButtons formState={formState} setFormState={setFormState} />
    </div>
  );
}

export default WelcomeForms;
