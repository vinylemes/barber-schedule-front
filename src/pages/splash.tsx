import "../styles/splash.css";
import splash from "../assets/splash-screen.svg";

const Splash = () => {
  return (
    <div className="bg">
      <img src={splash} />
    </div>
  );
};

export default Splash;
