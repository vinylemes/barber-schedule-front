import "../styles/subscription.css";
import SubscriptionCarousel from "../components/subscription-carousel/subscription-carousel";
import { Button } from "@/components/ui/button";

const Subscription = () => {
  return (
    <div className="container ">
      <h1 className="titulo">Escolha um plano</h1>
      <SubscriptionCarousel />
      <Button className="bg-primary text-white my-5 w-[380px] h-[50px] b-r-10 text-lg font-bold transition-transform duration-200  hover:scale-105 hover:bg-primary">
        Escolher este plano
      </Button>
    </div>
  );
};

export default Subscription;
