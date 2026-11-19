import { useState } from 'react';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import messages from './data/messages.json';
import './App.css';

const App = () => {
  const [entries, setEntries] = useState(messages);
  const [color, setColor] = useState('#CFE3FF');

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

  // Get the names of the chat participants
  const participants = [...new Set(entries.map((entry) => entry.sender))];

  return (
    <div id="App">
      <header>
        <h1>{participants.join(' & ')} Chat Log</h1>
        <p>{countLikes()} ❤️s</p>

        <ColorChoice setColorCallback={setColor} />
      </header>

      <main>
        <ChatLog
          entries={entries}
          onLike={handleLike}
          color={color}
        />
      </main>
    </div>
  );
};

export default App;