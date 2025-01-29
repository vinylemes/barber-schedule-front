import "../styles/splash.css";
import splash from "../assets/splash-screen.svg";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/home");
  }, 2000);

  return (
    <div className="bg">
      <img src={splash} className="img-bg" />
    </div>
  );
};

export default Splash;
