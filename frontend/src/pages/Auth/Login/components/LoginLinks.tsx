import { Link } from "react-router";

const LoginLinks = () => {
  return (
    <div className="space-y-2 text-center text-sm text-muted-foreground">
      Don't have an account?{" "}
      <Link to="/register" className="font-medium text-foreground hover:underline">
        Register
      </Link>
      <Link to="/forgot-password" className="block text-primary hover:underline">
        Forgot Password?
      </Link>
    </div>
  );
};

export default LoginLinks;
