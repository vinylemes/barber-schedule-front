interface SidebarItens {
  imageUrl: string;
  titulo: string;
  rota: string;
}

export const sidebarItens: SidebarItens[] = [
  {
    imageUrl: "../../public/calendar.png",
    rota: "/agenda",
    titulo: "Agenda",
  },
  {
    imageUrl: "../../public/contract.png",
    rota: "/preferencias",
    titulo: "Preferências",
  },
  {
    imageUrl: "../../public/document.png",
    rota: "/servicos",
    titulo: "Serviços",
  },
  {
    imageUrl: "../../public/phone.png",
    rota: "/clientes",
    titulo: "Clientes",
  },
];
