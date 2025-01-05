import { Button } from "@radix-ui/themes";
import "../styles/subscription.css";
import SubscriptionCarousel from "../components/subscription-carousel/subscription-carousel";

const Subscription = () => {
  return (
    <div className="container ">
      <h1 className="titulo">Escolha um plano</h1>
      <SubscriptionCarousel />
      <Button className="btn">Escolher este plano</Button>
    </div>
  );
};

export default Subscription;
