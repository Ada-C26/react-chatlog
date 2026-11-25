import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(messages);
  const handleLike = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  const totalLikes = entries.reduce((total, entry) => {
    return entry.liked ? total + 1 : total;
  }, 0);

  const userNames = [...new Set(entries.map((entry) => entry.sender))];

  return (
    <div id="App">
      <header>
        <h1>Chat between {userNames.join(', ')}</h1>
        <p className="total-likes">Total Likes: {totalLikes}</p>
      </header>
      <main>
        <ChatLog entries={entries} onLike={handleLike} />
      </main>
    </div>
  );
};

export default App;