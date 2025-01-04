import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login-form/login-form";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="titulo">Faça Login</h1>
      <LoginForm />
      <div className="div-criar-conta">
        <p>
          ainda não tem conta <br />
          <span className="criar-conta" onClick={() => navigate("/register")}>
            Crie aqui!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
