import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {

  const [entries, setEntries] = useState(messages);

  const toggleLike = (entryId) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === entryId) {
        return { ...entry, liked: !entry.liked };
      } else {
        return entry;
      }
    });

    setEntries(updatedEntries);
  };

// set where func counts messages with liked true
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
        <h1>Chat Between Vladimir and Estragon</h1>
        <section>
          <span id="heartWidget">{countLikes()} ❤️s</span>
        </section>
      </header>
      <main>
        <ChatLog entries={entries} 
          onEntryLikeToggle={toggleLike} 
          countLikes={countLikes} />
      </main>
    </div>
  );
};

export default App;
