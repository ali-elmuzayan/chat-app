import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <header>
        <h1>HRMS</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Copyright 2026 HRMS</p>
      </footer>
    </div>
  );
};

export default AppLayout;
