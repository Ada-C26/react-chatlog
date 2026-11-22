import { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import './App.css';

function App() {
  const [entries, setEntries] = useState(messages);
  const localSender = messages[0].sender;

  const handleLike = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  const countLikes = (entriesList) => {
    return entriesList.filter((entry) => entry.liked).length;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between {messages[0].sender} and {messages[1].sender}</h1>
        <section>
          <h2 id="heartWidget">
            {countLikes(entries)} ❤️s
          </h2>
        </section>
      </header>

      <main>
        <ChatLog entries={entries} onLike={handleLike} localSender={localSender} />
      </main>
    </div>
  );
}

export default App;
