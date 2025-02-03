import SubscriptionCarousel from "../components/subscription-carousel/subscription-carousel";
import { Button } from "@/components/ui/button";

const Subscription = () => {
  return (
    <div className="bg-gradient-to-t from-gradient-start to-gradient-end via-gradient-end/35 w-[100vw] h-[100vh] flex flex-col items-center justify-evenly ">
      <h1 className="text-3xl text-black font-bold mb-4">Escolha um plano</h1>
      <SubscriptionCarousel />
      <Button className="bg-primary text-white my-5 w-[380px] h-[50px] b-r-10 text-lg font-bold transition-transform duration-200  hover:scale-105 hover:bg-primary">
        Escolher este plano
      </Button>
    </div>
  );
};

export default Subscription;
