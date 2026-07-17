import Sidebar from "./Components/Sidebar";
import ChatArea from "./Components/ChatArea";

const Home = () => {
  return (
    <div className="flex min-h-[calc(100vh-1.5rem)] items-center justify-center">
      <div className="flex h-[min(820px,100%)] w-full max-w-7xl overflow-hidden rounded-2xl border bg-card shadow-xl shadow-black/5 dark:shadow-black/25">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Chat Area */}
        <ChatArea />
      </div>
    </div>
  );
};

export default Home;
