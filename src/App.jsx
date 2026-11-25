import './App.css';
import messages from './data/messages.json'
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const [entries, setEntries] = useState(messages);

  const toggleLike = (id) => {
    setEntries((currentEntries) =>
      currentEntries.map((entry) => {
        if (entry.id === id) {
          return { ...entry, liked: !entry.liked };
        }
        return entry;
      })
    );
  };

  const likeCount = entries.filter((entry) => entry.liked).length;
  
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{likeCount} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={entries} onLike={toggleLike} /> 
      </main>
    </div>
  );
};

export default App;
