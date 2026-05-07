import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const SendMessageInput = () => {
  return (
    <form className="relative w-full border-t bg-background px-5 py-4">
      <Input placeholder="Type your message..." className="h-12 rounded-full bg-muted/40 pr-12" />
      <Send className="absolute right-9 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
    </form>
  );
};

export default SendMessageInput;
