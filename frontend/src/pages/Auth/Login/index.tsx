import LoginForm from "./components/LoginForm";
import LoginLinks from "./components/LoginLinks";

const Login = () => {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="space-y-8 rounded-2xl border bg-card/90 px-7 py-9 shadow-xl backdrop-blur md:px-8">
        <div className="space-y-1 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Welcome back</h2>
          <p className="text-sm text-muted-foreground">Sign in to continue your conversations.</p>
        </div>
  
        <LoginForm />
        <LoginLinks />
      </div>
    </div>
  );
};

export default Login;
