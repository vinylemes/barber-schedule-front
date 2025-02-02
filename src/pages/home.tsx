import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-container background-details">
      <div className="divider"></div>
      <div className="left-container">
        <div className="content-container">
          <h1 className="welcome-title" style={{ margin: "50px" }}>
            Olá! Seja bem vindo(a)
          </h1>
          <div className="button-container">
            <Button className="button-login" onClick={() => navigate("/login")}>
              Entrar
            </Button>
            <Button
              className="button-register hover:bg-white hover:border-none"
              onClick={() => navigate("/register")}>
              Registrar
            </Button>
          </div>
        </div>
      </div>
      <div className="right-container">
        <img
          className="splash-image"
          src="/src/assets/carinha-caindo.svg"
          alt="Splash"
        />
      </div>
    </div>
  );
};

export default Home;
