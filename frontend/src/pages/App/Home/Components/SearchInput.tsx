import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
const SearchInput = () => {
  return (
    <form className="mb-4 flex items-center gap-2 border-b pb-4">
      <Input placeholder="Search conversations..." className="h-10 bg-background" />
      <Button type="submit" size="icon" className="h-10 w-10">
        <Search />
      </Button>
    </form>
  );
};

export default SearchInput;
