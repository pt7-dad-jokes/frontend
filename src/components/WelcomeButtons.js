import React from "react";

function WelcomeButtons({ formState, setFormState }) {
  function changeDisplay() {
    return formState !== "login" ? { display: "none" } : { display: "block" };
  }

  return (
    <div style={changeDisplay()}>
      <button>Sign Up</button>
      <button onClick={() => setFormState("forgotPassword")}>
        Forgot Password
      </button>
      <button>Continue As Guest</button>
    </div>
  );
}

export default WelcomeButtons;
