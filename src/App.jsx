import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(messages);
  const toggleLike = (id) => {
  setEntries((currentEntries) => {
    const updatedEntries = [];

    for (const entry of currentEntries) {
      if (entry.id === id) {
        const updatedEntry = { ...entry };
        updatedEntry.liked = !entry.liked;
        updatedEntries.push(updatedEntry);
      } else {
        updatedEntries.push(entry);
      }
    }

    return updatedEntries;
  });
};

  const likeCount = entries.filter((entry) => entry.liked).length;
  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladmir and Estragon</h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        < ChatLog
          entries={entries}
          onToggleLike={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;
