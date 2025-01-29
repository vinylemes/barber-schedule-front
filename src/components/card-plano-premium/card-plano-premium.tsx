import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import coroa from "../../../public/crown.png";

const CardPlanoPremium = () => {
  return (
    <Card className="bg-[#212226] text-white w-[342px] h-[155px]">
      <CardContent className="flex flex-row  justify-between relative p-4 h-full w-full">
        <div>
          <p className="font-bold text-lg">Barber App Premium</p>
          <p className="text-[#949BA5]">Desbloqueie novos recursos</p>
          <Button className="bg-[#EDB01B] mt-5 hover:bg-[#EDB01B] hover:border-[#EDB01B]">
            Upgrade
          </Button>
        </div>
        <img
          src={coroa}
          className="w-32 absolute bottom-0 right-0 rounded-br-xl"
          style={{ position: "absolute", bottom: 0, right: 0 }}
        />
      </CardContent>
    </Card>
  );
};

export default CardPlanoPremium;
