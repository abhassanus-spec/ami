import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Send, X } from 'lucide-react';

const AiChatbox: React.FC = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    {
      text: language === 'de' ? 'Hallo, wie kann ich Ihnen heute helfen?' :
            language === 'en' ? 'Hello, how can I help you today?' :
            language === 'ar' ? 'مرحبا، كيف فيني ساعدك اليوم؟' :
            'Merhaba, size bugün nasıl yardımcı olabilirim?',
      isUser: false
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setMessage('');
    setIsLoading(true);

    try {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
      
      if (!webhookUrl) {
        throw new Error('Webhook URL not configured');
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response || data.message, isUser: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = language === 'de' ? 'Entschuldigung, der Chat-Service ist momentan nicht verfügbar. Bitte versuchen Sie es später erneut.' :
                          language === 'en' ? 'Sorry, the chat service is currently unavailable. Please try again later.' :
                          language === 'ar' ? 'عذراً، خدمة الدردشة غير متوفرة حالياً. يرجى المحاولة لاحقاً.' :
                          'Üzgünüz, sohbet servisi şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyin.';
      
      setMessages(prev => [...prev, {
        text: errorMessage,
        isUser: false
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const isLegalPage = location.pathname !== '/';

  if (isLegalPage) {
    return null;
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-800 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-xl z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-green-800 text-white rounded-t-lg">
            <h3 className="font-semibold">
              {language === 'de' ? 'Chat mit uns' :
               language === 'en' ? 'Chat with us' :
               language === 'ar' ? 'تحدث معنا' :
               'Bizimle sohbet edin'}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isUser
                      ? 'bg-green-800 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  language === 'de' ? 'Ihre Nachricht...' :
                  language === 'en' ? 'Your message...' :
                  language === 'ar' ? 'رسالتك...' :
                  'Mesajınız...'
                }
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                disabled={isLoading || !message.trim()}
                className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AiChatbox;