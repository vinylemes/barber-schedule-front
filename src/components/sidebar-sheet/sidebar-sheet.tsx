import { X } from "lucide-react";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { sidebarItens } from "@/constants/menu";
import tesoura from "../../../public/scissor-iso-color.png";
import { useNavigate } from "react-router-dom";

const SidebarSheet = () => {
  const navigate = useNavigate();

  return (
    <SheetContent className="flex flex-col  space-y-4 py-10">
      <SheetHeader className="flex items-end">
        <SheetClose asChild>
          <Button size="icon" variant="outline">
            <X />
          </Button>
        </SheetClose>
      </SheetHeader>

      <div className="flex flex-col gap-2 py-5">
        {sidebarItens.map((item) => (
          <SheetClose key={item.titulo} asChild>
            <Button
              className="justify-start gap-2 px-8 bg-background py-6 hover:border-background hover:bg-background"
              variant="ghost"
              onClick={() => navigate(item.rota)}
            >
              <img
                src={item.imageUrl}
                alt={item.titulo}
                className="w-10 h-10"
              />
              <p className="text-2xl">{item.titulo}</p>
            </Button>
          </SheetClose>
        ))}
      </div>

      <SheetFooter className="h-full flex items-end">
        <div className="flex flex-col space-y-2 items-center  w-full ">
          <img src={tesoura} className="w-10 h-10" />
          <p>Versão 0.0.1</p>
        </div>
      </SheetFooter>
    </SheetContent>
  );
};

export default SidebarSheet;
