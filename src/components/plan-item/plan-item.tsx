import "./index.css";
import { Plan } from "../../data/plans";
import { CircleCheckBig } from "lucide-react";

interface PlanItemProps {
  plan: Plan;
}

const PlanItem = ({ plan }: PlanItemProps) => {
  return (
    <div className="fundo">
      <p className="preco">
        ${plan.price}{" "}
        <span className="mes"> {plan.price === 0 ? "free" : "/month"}</span>
      </p>
      <p className="descricao">{plan.description}</p>
      <div className="features">
        {plan.features.map((feature, index) => (
          <div key={index} className="feature">
            <CircleCheckBig size={20} />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanItem;
