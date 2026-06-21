import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import OpenAI from 'openai';
import { SYSTEM_PROMPT } from '../lib/chatbotKnowledge';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! 👋 I am the Little Pathshala virtual assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const defaultOptions = [
    "I want to enroll my child",
    "Where are your centres located?",
    "Show me the gallery",
    "How do I open a franchise?"
  ];



  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleAction = (text) => {
    let cleanText = text;
    
    if (text.includes('[ACTION:NAVIGATE_ADMISSION]')) {
      cleanText = text.replace('[ACTION:NAVIGATE_ADMISSION]', '');
      setTimeout(() => navigate('/admission'), 1500);
    } else if (text.includes('[ACTION:NAVIGATE_FRANCHISE]')) {
      cleanText = text.replace('[ACTION:NAVIGATE_FRANCHISE]', '');
      setTimeout(() => navigate('/franchise'), 1500);
    } else if (text.includes('[ACTION:NAVIGATE_GALLERY]')) {
      cleanText = text.replace('[ACTION:NAVIGATE_GALLERY]', '');
      setTimeout(() => navigate('/gallery'), 1500);
    }

    return cleanText;
  };

  const handleSubmit = async (e, forcedInput = null) => {
    if (e) e.preventDefault();
    const textToSend = forcedInput || input;
    if (!textToSend.trim() || isLoading) return;

    setShowOptions(false); // Hide options once they start chatting

    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      setMessages(prev => [...prev, { role: 'user', content: textToSend }, { role: 'assistant', content: "⚠️ System Error: OpenAI API Key is missing. Please add VITE_OPENAI_API_KEY to your .env.local file." }]);
      if (!forcedInput) setInput('');
      return;
    }

    const userMessage = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, userMessage]);
    if (!forcedInput) setInput('');
    setIsLoading(true);

    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true 
      });

      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map(m => ({ role: m.role, content: m.content })),
        userMessage
      ];

      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini', // fast, cheap, smart
        messages: apiMessages,
        temperature: 0.7,
      });

      const rawContent = response.choices[0].message.content;
      const cleanContent = handleAction(rawContent);

      setMessages(prev => [...prev, { role: 'assistant', content: cleanContent }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I am having trouble connecting to my brain right now! Please call us directly.' }]);
      console.error("Chatbot Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed', bottom: '24px', right: '24px', height: '60px', padding: isOpen ? '0 24px' : '0 24px 0 10px',
          borderRadius: '30px', background: 'var(--yellow-500)', border: 'none', 
          boxShadow: '0 8px 24px rgba(245,158,11,0.4)', cursor: 'pointer', zIndex: 9999,
          display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', fontWeight: '700', color: 'var(--purple-900)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(245,158,11,0.5)'; }}
        onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,158,11,0.4)'; }}
      >
        {isOpen ? '✕ Close' : (
          <>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#fff', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--yellow-600)' }}>
              <img src="/assets/minion_cropped.png" alt="Assistant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            Pathshala Assistant
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: '100px', right: '24px', width: '350px', height: '500px',
          background: '#fff', borderRadius: '20px', boxShadow: '0 12px 40px rgba(46,16,101,0.15)',
          display: 'flex', flexDirection: 'column', zIndex: 9998, overflow: 'hidden',
          border: '1px solid var(--gray-100)'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, var(--purple-600), var(--purple-400))',
            padding: '16px', color: '#fff', display: 'flex', alignItems: 'center', gap: '12px'
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
              🤖
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', color: '#fff' }}>Pathshala Assistant</h3>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--purple-100)' }}>Online | Ready to help!</p>
            </div>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--gray-50)' }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                background: msg.role === 'user' ? 'var(--yellow-500)' : '#fff',
                color: msg.role === 'user' ? 'var(--purple-900)' : 'var(--gray-800)',
                padding: '12px 16px', borderRadius: '16px', maxWidth: '85%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)', fontSize: '14px', lineHeight: '1.5'
              }}>
                {msg.content}
              </div>
            ))}
            
            {/* Default Options */}
            {showOptions && messages.length === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                {defaultOptions.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSubmit(null, opt)}
                    style={{
                      alignSelf: 'flex-start', background: 'transparent', border: '1px solid var(--purple-400)',
                      color: 'var(--purple-700)', padding: '8px 14px', borderRadius: '16px', fontSize: '13px',
                      cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s ease',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}
                    onMouseOver={e => { e.currentTarget.style.background = 'var(--purple-50)'; e.currentTarget.style.borderColor = 'var(--purple-600)'; }}
                    onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--purple-400)'; }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div style={{ alignSelf: 'flex-start', background: '#fff', padding: '12px 16px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', fontSize: '14px' }}>
                <span className="typing-dot">.</span><span className="typing-dot">.</span><span className="typing-dot">.</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} style={{ padding: '16px', background: '#fff', borderTop: '1px solid var(--gray-100)', display: 'flex', gap: '8px' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..." 
              style={{ flex: 1, padding: '12px 16px', borderRadius: '24px', border: '1px solid var(--gray-200)', outline: 'none', fontSize: '14px' }}
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()} style={{
              width: '44px', height: '44px', borderRadius: '50%', background: 'var(--purple-600)', color: '#fff', 
              border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              ➤
            </button>
          </form>
        </div>
      )}
      
      <style>{`
        .typing-dot {
          animation: typing 1.4s infinite both;
          font-weight: bold;
        }
        .typing-dot:nth-child(1) { animation-delay: 0s; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }
      `}</style>
    </>
  );
}
