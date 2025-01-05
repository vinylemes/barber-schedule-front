import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import "./index.css";

import { EffectCards } from "swiper/modules";
import { useState } from "react";
import { Plan } from "../../data/plans";
import { planos } from "../../constants/planos";
import PlanItem from "../plan-item/plan-item";

const SubscriptionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const plans: Plan[] = planos;

  const getSlideClass = (index: number) => {
    if (index === activeIndex) {
      return "active-slide";
    }

    if (index === activeIndex - 1 || index === activeIndex + 1) {
      return "prev-next-slide";
    }

    return "last-slide";
  };

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {plans.map((plan) => (
          <SwiperSlide key={plan.id} className={getSlideClass(plan.id)}>
            <PlanItem plan={plan} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SubscriptionCarousel;
