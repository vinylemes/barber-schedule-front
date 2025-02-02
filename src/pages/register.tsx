import "../styles/register.css";

import { useNavigate } from "react-router-dom";
import RegisterForm from "@/components/register-form/register-form";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-t from-gradient-start to-gradient-end via-gradient-end/35 w-[100vw] h-[100vh] flex flex-col items-center">
      <h1 className="titulo font-bold text-4xl mt-24">Faça seu cadastro</h1>
      <RegisterForm />
      <div className="div-criar-conta"></div>
    </div>
  );
};

export default Register;
