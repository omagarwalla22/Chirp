import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="flex items-center justify-center pt-20 px-4">
        <div
          className="
            w-full max-w-6xl h-[calc(100vh-8rem)]
            rounded-xl border overflow-hidden 
            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            transition-all duration-300 
            bg-gray-100 text-black
            dark:bg-gray-800 dark:text-white
            border-gray-200 dark:border-gray-700
          "
        >
          <div className="flex h-full">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
