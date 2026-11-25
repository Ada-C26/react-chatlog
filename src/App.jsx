import './App.css';
import ChatLog from './components/ChatLog';
import data from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [likesCount, setLikesCount] = useState(
    data.filter(msg => msg.liked).length
  );
  const [msgData, setMsgData] = useState(data);

  const toggleLiked = (id) => {
    setMsgData((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, liked: !msg.liked } : msg)),
    );
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{likesCount} ❤️s</p>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog
          entries={msgData}
          setLikesCount={setLikesCount}
          toggleLiked={toggleLiked}
        />
      </main>
    </div>
  );
};

export default App;
