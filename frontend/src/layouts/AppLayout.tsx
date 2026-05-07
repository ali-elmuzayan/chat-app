import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-muted/40 to-background">
      <main className="min-h-screen p-3 md:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
