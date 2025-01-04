import { Button } from "@radix-ui/themes";
import React from "react";
import "./splash.css";

const splash = () => {
  return (
    <div className="splash-container">
      <Button className="button-login">Entrar</Button>
      <Button className="button-register">Registrar</Button>
    </div>
  );
};

export default splash;
