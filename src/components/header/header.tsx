import { Card, CardContent } from "../ui/card";
import logo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";
import SidebarMenu from "../sidebar-sheet/sidebar-menu";
import avatarLogo from "../../../public/user.png";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Card className="w-full rounded-none">
      <CardContent className="p-5 flex flex-row items-center justify-between mx-12">
        <img
          src={logo}
          onClick={() => navigate("/dashboard")}
          className="w-40"
        />

        <div className="flex flex-row space-x-10 items-center">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex flex-row gap-4 items-center justify-center hover:cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={avatarLogo} />
                </Avatar>
                <p className="text-sm font-bold">João Teste</p>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-full mt-3" asChild>
              <Button variant={"destructive"}>
                <LogOut />
                Sair
              </Button>
            </PopoverContent>
          </Popover>

          <SidebarMenu />
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
