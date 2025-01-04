import { Button } from "@radix-ui/themes";
import "./index.css";

const LoginForm = () => {
  return (
    <form className="register-form">
      <input
        type="email"
        placeholder="Digite seu Email"
        className="register-input"
      />
      <input
        type="senha"
        placeholder="Digite sua Senha"
        className="register-input"
      />
      <Button type="submit" className="register-button">
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
