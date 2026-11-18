import { useState } from 'react';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import messages from './data/messages.json';
import './App.css';

const App = () => {
  // Step 1: Store chat messages
  const [entries, setEntries] = useState(messages);

  // Step 2: Store colors for each participant
  const [vladimirColor, setVladimirColor] = useState('#d3e5ff');
  const [estragonColor, setEstragonColor] = useState('#fce4ec');

  // Step 3: Handle likes
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

  // Step 4: Calculate total likes
  const totalLikes = entries.filter((entry) => entry.liked).length;

  // Step 5: Get unique participant names
  const participants = [...new Set(entries.map((entry) => entry.sender))];

  return (
    <div id="App">
      <header>
        <h1>{participants.join(' & ')}'s Chat</h1>
        <p>{totalLikes} ❤️s</p>
      </header>

      <ColorChoice
        sender="Vladimir"
        color={vladimirColor}
        setColorCallback={setVladimirColor}
      />

      <ColorChoice
        sender="Estragon"
        color={estragonColor}
        setColorCallback={setEstragonColor}
      />

      <main>
        <ChatLog
          entries={entries}
          onLike={handleLike}
          vladimirColor={vladimirColor}
          estragonColor={estragonColor}
        />
      </main>
    </div>
  );
};

export default App;
