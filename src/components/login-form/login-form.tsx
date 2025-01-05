import { Button } from "@radix-ui/themes";
import "./index.css";
import {
  CrossCircledIcon,
  EyeClosedIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <form className="register-form">
      <div>
        <div className="password-input-container">
          <input
            type="email"
            placeholder="Digite seu Email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className="input-clear"
            onClick={() => {
              setEmail("");
            }}>
            <CrossCircledIcon />
          </div>
        </div>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua Senha"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </div>
        </div>

        <div className="forgot-password">
          <Link to="/forgotpassword">Esqueceu sua senha?</Link>
        </div>
      </div>
      <Button
        type="submit"
        className="button-submit"
        onClick={() => navigate("/registerbarbershop")}>
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
