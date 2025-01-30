import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger } from "../ui/sheet";
import SidebarSheet from "./sidebar-sheet";

const SidebarMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SidebarSheet />
    </Sheet>
  );
};

export default SidebarMenu;
