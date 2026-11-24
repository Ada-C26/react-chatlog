import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {

  const [entries, setEntries] = useState(messages);

  const toggleLike = (id) => {
    setEntries((currentEntries) =>
      currentEntries.map((entry) =>
        entry.id === id
          ? { ...entry, liked: !entry.liked }
          : entry
      ));
  };

  const totalLikes = entries.filter((entry) => entry.liked).length;
  const participants = [...new Set(entries.map((entry) => entry.sender))];

  return (
    <div id="App">
      <header>
        <h1>Chat between {participants.join(' & ')}</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} onLike={toggleLike} />
      </main>
    </div>
  );

};


export default App;
