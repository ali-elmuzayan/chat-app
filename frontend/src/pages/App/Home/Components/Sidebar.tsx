import { LogOut } from "lucide-react";
import ConversationList from "./ConversationList";
import { Button } from "@/components/ui/button";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <aside className="hidden w-[340px] shrink-0 flex-col border-r bg-muted/20 p-4 md:flex">
      {/* Search Bar */}
      <SearchInput />

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto pr-1">
        <ConversationList />
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex h-14 items-center justify-between border-t pt-3">
        <Button variant="outline" size="icon" className="rounded-full">
          <LogOut />
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
