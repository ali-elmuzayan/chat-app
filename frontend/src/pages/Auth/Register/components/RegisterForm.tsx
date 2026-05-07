import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle register logic here
    alert("Register functionality is not implemented yet.");
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">
          Name
        </Label>
        <Input id="name" type="text" placeholder="Mohamed Abdullah" className="h-11" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">
          Email
        </Label>
        <Input id="email" type="email" placeholder="mohamed@example.com" className="h-11" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">
          Password
        </Label>
        <Input id="password" type="password" placeholder="Enter your password..." className="h-11" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">
          Confirm Password
        </Label>
        <Input id="confirmPassword" type="password" placeholder="Confirm your password..." className="h-11" />
      </div>
      <div className="pt-2">
        <Button type="submit" className="h-11 w-full text-sm font-semibold">
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
