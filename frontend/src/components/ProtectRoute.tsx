import { Outlet, useNavigate } from "react-router";

const ProtectRoute = () => {
  const navigate = useNavigate();
  const user = false;

  if (!user) navigate("/login");
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectRoute;
