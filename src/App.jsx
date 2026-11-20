import './App.css';
import messageData from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(messageData);
  const toggleHeart = (messageId) => {
    setMessages((messages) => {
      return messages.map((message) =>
        message.id === messageId
          ? { ...message, liked: !message.liked }
          : message,
      );
    });
  };

  const heartCount = messages.filter((message) => message.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2> {heartCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messages} onToggleHeart={toggleHeart} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
