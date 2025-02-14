import ForgotPasswordForm from "../components/forgot-password-form/forgot-password-form";
import "../components/forgot-password/forgotpassword.css";

import { Button } from "@/components/ui/button";

const ForgotPassword = () => {
  return (
    <div className="bg-gradient-to-t from-gradient-start to-gradient-end via-gradient-end/35 w-[100vw] h-[100vh] flex flex-col items-center">
      <h1 className="titulo font-bold text-4xl mt-24">Esqueceu sua senha?</h1>

      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
