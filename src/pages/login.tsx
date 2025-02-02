import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login-form/login-form";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      className="login"
      style={{ background: "linear-gradient(white, lightpurple)" }}>
      <h1 className="titulo font-bold" style={{ textAlign: "center" }}>
        Faça Login
      </h1>
      <LoginForm />
      <div className="div-criar-conta">
        <p>
          Ainda não tem conta?
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
