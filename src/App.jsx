import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(messages);
  const likeCount = entries.filter(
    entry => entry.liked
  ).length;

  const toggleLike = (id) => {
    setEntries(entries.map(entry => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      } else {
        return entry;
      }
    }));
  };
  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
        <p> {likeCount} ❤️s </p>
      </header>
      <main>
        <div>
          <ChatLog 
            entries={entries} 
            toggleLike={toggleLike}/>
        </div>
      </main>
    </div>
  );
};

export default App;
