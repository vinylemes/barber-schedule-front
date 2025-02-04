import "../styles/registerbarbershop.css";
import { useNavigate } from "react-router-dom";
import RegisterBarberShopForm from "@/components/register-barber-shop-form/register-barber-shop-form";

import ManchaRoxa from "@/assets/mancha-roxa.svg";

const RegisterBarbershop = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#EBEBEB] flex flex-col items-center justify-center h-screen p-4 overflow-x-auto relative">
      <div className="flex flex-col items-center z-10">
        <h1 className="titulo text-center mb-8">
          Faça o cadastro<br></br>da sua barbearia
        </h1>
        <div className="mt-80">
          <RegisterBarberShopForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterBarbershop;
