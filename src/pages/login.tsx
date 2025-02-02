import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login-form/login-form";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-t from-gradient-start to-gradient-end via-gradient-end/35 w-[100vw] h-[100vh] flex flex-col items-center justify-evenly">
      <h1 className="titulo font-bold text-4xl">Faça Login</h1>
      <LoginForm />
      <div className="div-criar-conta">
        <p>
          ainda não tem conta
          <br />
          <span className="criar-conta" onClick={() => navigate("/register")}>
            Crie aqui!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
