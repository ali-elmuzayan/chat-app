import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const conversationList = [
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: true,
  },
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: true,
  },
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: true,
  },
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: true,
  },
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: true,
  },
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: true,
  },
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: false,
  },
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: true,
  },
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: true,
  },
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: true,
  },
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: true,
  },
  {
    image: "/placeholder.svg",
    name: "John Doe",
    messagesLeft: 5,
    isOnline: true,
  },
];

const ConversationList = () => {
  return (
    <div className="flex h-full flex-col gap-1.5">
      {conversationList.map((conversation, index) => (
        <ConversationItem key={index} {...conversation} />
      ))}
    </div>
  );
};

const ConversationItem = ({ image, name, messagesLeft, isOnline }: { image: string; name: string; messagesLeft: number; isOnline: boolean }) => {
  return (
    <button className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left transition hover:bg-muted">
      <Avatar size="lg">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>ER</AvatarFallback>
        {isOnline && <AvatarBadge className="bg-green-600 dark:bg-green-800" />}
      </Avatar>
      <div className="ml-4 flex-1">
        <div className="font-medium">{name}</div>
        {messagesLeft > 0 && (
          <div className="text-sm text-muted-foreground">
            {messagesLeft} new message{messagesLeft > 1 ? "s" : ""}
          </div>
        )}
      </div>
    </button>
  );
};

export default ConversationList;
