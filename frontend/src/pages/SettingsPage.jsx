import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hello! How you doing?", isSent: false },
  { id: 2, content: "I am doing good.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  const themes = ["light", "dark"];

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Display Mode</h2>
          <p className="text-sm text-base-content/70">
            Toggle between Light and Dark themes
          </p>
        </div>

        <div className="flex gap-4">
          {themes.map((t) => (
            <button
              key={t}
              className={`
                flex-1 py-2 rounded-lg text-sm font-medium transition
                ${theme === t
                  ? "bg-primary text-primary-content"
                  : "bg-base-200 hover:bg-base-200/50"}
              `}
              onClick={() => setTheme(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)} Mode
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <h3 className="text-lg font-semibold">Chat Preview</h3>
        <div className="rounded-xl border border-base-300 bg-base-100 shadow">
          <div className="p-4 bg-base-200">
            <div className="max-w-md mx-auto bg-base-100 rounded-xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-4 py-3 border-b border-base-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                    U
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">User</h3>
                    <p className="text-xs text-base-content/70">Online</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-4 max-h-48 overflow-y-auto">
                {PREVIEW_MESSAGES.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.isSent ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] p-3 rounded-xl shadow-sm ${
                        msg.isSent
                          ? "bg-primary text-primary-content"
                          : "bg-base-200 text-base-content"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p
                        className={`text-[10px] mt-1 ${
                          msg.isSent
                            ? "text-primary-content/70"
                            : "text-base-content/70"
                        }`}
                      >
                        12:34 PM
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="px-4 py-3 border-t border-base-300 bg-base-100">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input input-bordered flex-1 h-10 text-sm"
                    placeholder="Type a message…"
                    value="Preview mode"
                    readOnly
                  />
                  <button className="btn btn-primary h-10 p-0 w-10">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
