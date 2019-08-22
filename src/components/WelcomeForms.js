import React, { useState } from "react";
import LoginForm from "./LoginForm";
import WelcomeButtons from "./WelcomeButtons";
import ForgotPasswordForm from "./ForgotPasswordForm";

function WelcomeForms() {
  // 3 form states login, forgotPassword and signup
  const [formState, setFormState] = useState("login");

  return (
    <div>
      <LoginForm formState={formState} />
      <ForgotPasswordForm formState={formState} />
      <WelcomeButtons formState={formState} setFormState={setFormState} />
    </div>
  );
}

export default WelcomeForms;
