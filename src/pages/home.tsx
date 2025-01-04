import { Button } from "@radix-ui/themes";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="splash-container">
      <Button className="button-login">Entrar</Button>
      <Button className="button-register">Registrar</Button>
    </div>
  );
};

export default Home;
