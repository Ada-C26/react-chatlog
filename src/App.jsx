import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { LIKED_HEART } from './constants';
import { getCountLikes } from './helpers';

const App = () => {
  const [entries, setEntries] = useState(messages);

  // responsible for updating the liked of the data
  // NOT writing in the file..
  const updateLikedEntries = (id) => {
    return entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });
  };

  const handleLikeToggle = (id) => {
    const updatedEntries = updateLikedEntries(id);
    setEntries(updatedEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{getCountLikes(entries)} {LIKED_HEART}s</h2>
      </header>
      <main>
        <ChatLog entries={entries} onLikeToggle={handleLikeToggle} />
      </main>
    </div>
  );
};

export default App;
