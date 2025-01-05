import "./index.css";
import { Plan } from "../../data/plans";
import { FaCheckCircle } from "react-icons/fa";

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
            <FaCheckCircle
              size={20}
              style={{
                color: "3d59e6", // Cor do círculo
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanItem;
