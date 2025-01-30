import "../styles/register.css";

import { useNavigate } from "react-router-dom";
import RegisterForm from "@/components/register-form/register-form";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="titulo font-bold text-4xl">Faça seu cadastro</h1>

      {/* <form className="register-form">
        <div className="password-input-container">
          <input
            type="text"
            placeholder="Digite seu Nome"
            className="register-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="input-clear" onClick={() => setName("")}>
            <CircleX size={20} />
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
            <CircleX size={20} />
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
            {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
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
            {showConfirmPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
          </div>
        </div>

        <Button
          type="submit"
          className="bg-primary text-white my-5 w-[350px] h-[50px] b-r-10 text-lg transition-transform duration-200  hover:scale-105 hover:bg-primary"
        >
          Registrar
        </Button>
      </form> */}

      <RegisterForm />

      <div className="div-criar-conta">
        <p>
          Já possui conta? <br />
          <span className="criar-conta" onClick={() => navigate("/login")}>
            Entre aqui!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
