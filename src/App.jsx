import { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import './App.css';

const App = () => {
  // Step 1: Initialize state with messages
  const [entries, setEntries] = useState(messages);

  // Step 2: Handle like button clicks
  const handleLike = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            liked: !entry.liked,
          };
        }
        return entry;
      }),
    );
  };

  // Step 3: Calculate total likes
  const totalLikes = entries.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>React Chat Log</h1>
        <p>{totalLikes} ❤️s</p>
      </header>

      <main>
        <ChatLog entries={entries} onLike={handleLike} />
      </main>
    </div>
  );
};

export default App;
