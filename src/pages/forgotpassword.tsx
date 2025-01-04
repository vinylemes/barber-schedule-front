import React from "react";
import ForgotPasswordForm from "../components/forgot-password-form/forgot-password-form";
import "../components/forgot-password/forgotpassword.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-title">Esqueceu sua senha?</h1>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
