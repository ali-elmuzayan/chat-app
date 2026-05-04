import { Route, Routes } from "react-router";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/App/Home";
import Profile from "./pages/App/Profile";
import Settings from "./pages/App/Settings";
import ProtectRoute from "./components/ProtectRoute";

const App = () => {
  return (
    <>
      <Routes>
        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectRoute />}>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
