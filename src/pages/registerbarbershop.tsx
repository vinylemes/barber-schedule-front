import "../styles/registerbarbershop.css";
import { useNavigate } from "react-router-dom";
import RegisterBarberShopForm from "@/components/register-barber-shop-form/register-barber-shop-form";
import Scissors from "@/assets/scissors.svg";

const RegisterBarbershop = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-t from-gradient-start to-gradient-end via-gradient-end/35 flex flex-row items-center justify-evenly h-screen p-4">
      <div className="flex flex-col items-center w-1/2">
        <h1 className="titulo font-bold text-4xl text-center mb-8">
          Faça o cadastro<br></br>da sua barbearia
        </h1>
        <RegisterBarberShopForm />
      </div>
      <div className="flex items-center justify-center w-1/2">
        <Scissors width="240px" height="90px" />
      </div>
    </div>
  );
};

export default RegisterBarbershop;
