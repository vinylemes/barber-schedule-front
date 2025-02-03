import "../styles/register.css";

import { useNavigate } from "react-router-dom";
import RegisterForm from "@/components/register-form/register-form";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-t from-gradient-start to-gradient-end via-gradient-end/35 flex flex-col items-center justify-evenly h-screen">
      <h1 className="titulo font-bold text-4xl">Faça seu cadastro</h1>
      <RegisterForm />

      <div className="div-criar-conta">
        <p>
          Já possui conta? <br />
          <span className="criar-conta " onClick={() => navigate("/login")}>
            Entre aqui!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
