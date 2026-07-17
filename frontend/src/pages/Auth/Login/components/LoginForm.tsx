import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    alert("Login functionality is not implemented yet.");
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="email">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          className="h-11"
          placeholder="Enter your email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          className="h-11"
          placeholder="Enter your password"
        />
      </div>
      <div className="pt-2">
        <Button type="submit" className="h-11 w-full text-sm font-semibold">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
