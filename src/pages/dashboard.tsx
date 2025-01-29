import SidebarMenu from "@/components/sidebar-sheet/sidebar-menu";

const DashboardPage = () => {
  return (
    <div className="bg-background w-[100vw] h-[100vh] flex flex-col items-center">
      {" "}
      <SidebarMenu />
      <p>Dashboard</p>
    </div>
  );
};

export default DashboardPage;
