import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.9_0_0/.6),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,oklch(0.3_0_0/.35),transparent_55%)]" />
      <main className="relative z-10 w-full max-w-md">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
