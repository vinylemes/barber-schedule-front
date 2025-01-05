import { useNavigate } from "react-router-dom";
import "../styles/registerbarbershop.css"; // You can reuse the same styles or create a new CSS file
import RegisterBarbershopForm from "../components/register-barber-form/register-barbershop-form";

const RegisterBarbershop = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="titulo">
        Faça o cadastro <br></br> da sua barbearia
      </h1>
      <RegisterBarbershopForm />
      <div className="div-criar-conta"></div>
    </div>
  );
};

export default RegisterBarbershop;
