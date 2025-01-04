import { useState } from "react";
import "../styles/register.css";
import {
  EyeOpenIcon,
  EyeClosedIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="register-container">
      <h1 className="register-title">Faça seu cadastro</h1> {/* Added title */}
      <form className="register-form">
        <div className="password-input-container">
          <input
            type="text"
            placeholder="Digite seu Nome"
            className="register-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="input-clear" onClick={() => setName("")}>
            <CrossCircledIcon />
          </div>
        </div>
        <div className="password-input-container">
          <input
            type="email"
            placeholder="Digite seu Email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="input-clear" onClick={() => setEmail("")}>
            <CrossCircledIcon />
          </div>
        </div>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Crie uma senha"
            className="register-input"
          />
          <div
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </div>
        </div>
        <div className="password-input-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirmar senha"
            className="register-input"
          />
          <div
            className="password-toggle"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </div>
        </div>
        <button type="submit" className="button-submit">
          Registrar
        </button>
      </form>
      <div className="register-footer">
        Já possui conta? <br /> <a href="/login">Entre aqui!</a>
      </div>
    </div>
  );
};

export default Register;
