import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-container">
      <div className="splash-image"></div>{" "}
      {/* Added a div for the background image */}
      <div className="button-container">
        {" "}
        {/* Added a container for the buttons */}
        <Button className="button-login" onClick={() => navigate("/login")}>
          Entrar
        </Button>
        <Button
          className="button-register hover:bg-white hover:border-none"
          onClick={() => navigate("/register")}
        >
          Registrar
        </Button>
      </div>
    </div>
  );
};

export default Home;
