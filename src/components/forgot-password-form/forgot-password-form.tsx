import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import {
  CrossCircledIcon,
  EyeClosedIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <form className="forgot-password-form">
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
            placeholder="Crie uma nova Senha"
            className="register-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </div>
        </div>
      </div>
      <Button
        type="submit"
        className="button-submit"
        onClick={() => navigate("/login")}>
        Alterar
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
