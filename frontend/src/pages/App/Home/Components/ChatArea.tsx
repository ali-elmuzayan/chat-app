import MessagesContainer from "./MessagesContainer";
import SendMessageInput from "./SendMessageInput";

const ChatArea = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full border-b bg-background/80 px-5 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="text-sm text-muted-foreground">
          To: <span className="font-medium text-foreground">Username</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-muted/10">
        <MessagesContainer />
        <SendMessageInput />
      </div>
    </div>
  );
};

export default ChatArea;
