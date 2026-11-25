import './App.css';
import ChatLog from './components/ChatLog';
import initialMessageData from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [messageData, setMessageData] = useState(initialMessageData);

  const onLikedChanged = (message_id) => {
    setMessageData((entries) => 
      entries.map((entry) => entry.id == message_id ? { ...entry, liked: !entry.liked} : entry)
    );
  }

  const totalLikes = messageData.filter((msg) => msg.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat</h1>
        <section className="widget" id="heartWidget">
          {totalLikes} ❤️s
        </section>
      </header>
      <main>
        <ChatLog entries={messageData} onLikedChanged={onLikedChanged}></ChatLog>
      </main>
    </div>
  );
};

export default App;
