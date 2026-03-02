
import { getChatResponse } from "./gemini.ts";

export function initChatWidget() {
  const widgetContainer = document.createElement('div');
  widgetContainer.id = 'chat-widget-container';
  widgetContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col items-end';
  document.body.appendChild(widgetContainer);

  let isOpen = false;
  let messages: { role: 'user' | 'assistant', content: string }[] = [
    { role: 'assistant', content: 'Hello! I am your Nova Business Assistant. How can I help you today?' }
  ];
  let isLoading = false;

  const render = () => {
    widgetContainer.innerHTML = `
      <!-- Chat Window -->
      <div id="chat-window" class="${isOpen ? 'flex' : 'hidden'} bg-white w-[350px] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl flex-col overflow-hidden mb-4 border border-slate-200 transition-all transform animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div class="bg-blue-600 p-4 text-white flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center font-bold">N</div>
            <div>
              <h4 class="font-bold text-sm">Nova Assistant</h4>
              <div class="flex items-center space-x-1">
                <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                <span class="text-[10px] text-blue-100">Online</span>
              </div>
            </div>
          </div>
          <button id="close-chat" class="hover:bg-blue-700 p-1 rounded transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div id="chat-messages" class="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
          ${messages.map((msg) => `
            <div class="flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}">
              <div class="max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
              }">
                ${msg.content}
              </div>
            </div>
          `).join('')}
          ${isLoading ? `
            <div class="flex justify-start">
              <div class="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 flex space-x-1">
                <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          ` : ''}
        </div>

        <form id="chat-form" class="p-3 bg-white border-t border-slate-100">
          <div class="relative flex items-center">
            <input
              id="chat-input"
              type="text"
              placeholder="Type a message..."
              class="w-full pl-4 pr-12 py-2.5 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button 
              type="submit"
              class="absolute right-2 p-1.5 text-blue-600 hover:text-blue-700 disabled:text-slate-300 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </div>
        </form>
      </div>

      <!-- Toggle Button -->
      <button
        id="toggle-chat"
        class="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-200 text-slate-600' : 'bg-blue-600 text-white'
        }"
      >
        ${isOpen ? `
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
        ` : `
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        `}
      </button>
    `;

    // Add event listeners
    document.getElementById('toggle-chat')?.addEventListener('click', () => {
      isOpen = !isOpen;
      render();
    });

    document.getElementById('close-chat')?.addEventListener('click', () => {
      isOpen = false;
      render();
    });

    const chatForm = document.getElementById('chat-form') as HTMLFormElement;
    chatForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = document.getElementById('chat-input') as HTMLInputElement;
      const userMsg = input.value.trim();
      if (!userMsg || isLoading) return;

      input.value = '';
      messages.push({ role: 'user', content: userMsg });
      isLoading = true;
      render();

      const assistantMsg = await getChatResponse(userMsg, messages);
      messages.push({ role: 'assistant', content: assistantMsg });
      isLoading = false;
      render();
      
      // Scroll to bottom
      const chatMessages = document.getElementById('chat-messages');
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    });

    // Scroll to bottom after render if open
    if (isOpen) {
      const chatMessages = document.getElementById('chat-messages');
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }
  };

  render();
}
