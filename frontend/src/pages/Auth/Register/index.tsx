import RegisterForm from "./components/RegisterForm";
import RegisterLinks from "./components/RegisterLinks";

const Register = () => {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="space-y-8 rounded-2xl border bg-card/90 px-7 py-9 shadow-xl backdrop-blur md:px-8">
        <div className="space-y-1 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Create account</h2>
          <p className="text-sm text-muted-foreground">Start chatting with your team in minutes.</p>
        </div>
        <RegisterForm />
        <RegisterLinks />
      </div>
    </div>
  );
};

export default Register;
