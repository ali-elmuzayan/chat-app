import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <h1>HRMS</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
