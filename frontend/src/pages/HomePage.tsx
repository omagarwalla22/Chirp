import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/50">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 w-full max-w-6xl h-[calc(100vh-8rem)] transition-all duration-300 hover:shadow-[0_20px_25px_-5px_rgb(0,0,0,0.1),0_10px_10px_-5px_rgb(0,0,0,0.04)]">
          <div className="flex h-full rounded-xl overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
