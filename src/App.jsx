
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import './App.css';

const App = () => {
  // Store all messages in state
  const [entries, setEntries] = useState(messages);

  // Change the liked status of one message
  const handleLike = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return {
          ...entry,
          liked: !entry.liked,
        };
      }

      return entry;
    });

    setEntries(updatedEntries);
  };

  // Count liked messages
  const countLikes = () => {
    let count = 0;

    for (const entry of entries) {
      if (entry.liked) {
        count += 1;
      }
    }

    return count;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <p>{countLikes()} ❤️s</p>
      </header>
      <main>
        <ChatLog
          entries={entries}
          onLike={handleLike}
        />
      </main>
    </div>
  );
};

export default App;