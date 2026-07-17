import { Link } from "react-router";

const RegisterLinks = () => {
  return (
    <div className="text-center text-sm text-muted-foreground">
      Have an account?{" "}
      <Link to="/login" className="font-medium text-foreground hover:underline">
        Login
      </Link>
    </div>
  );
};

export default RegisterLinks;
