import './App.css';
import { useState } from 'react';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog.jsx';

const App = () => {
  const [chatMessages, setChatMessages] = useState(messages);
  const toggleMessageLike = (messageId) => {
    const updatedMessages = chatMessages.map((message) => {
      if (message.id === messageId) {
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    });

    setChatMessages(updatedMessages);
  };
  let likedCount = 0;

  for (const message of chatMessages) {
    if (message.liked === true) {
      likedCount += 1;
    }
  }
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <div className="widget">
            <p id="heartWidget">{likedCount} ❤️s</p>
          </div>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        <ChatLog
          entries={chatMessages}
          onLikeToggle={toggleMessageLike}
        />

        {/* Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};
export default App;
