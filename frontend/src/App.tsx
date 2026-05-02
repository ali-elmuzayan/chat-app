import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center pt-10">Welcome to the App!</h1>
      <Button className="mx-auto mt-5">Click Me</Button>
    </div>
  );
}

export default App;
