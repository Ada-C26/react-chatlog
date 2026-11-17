import './App.css';
//import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import {useState} from 'react';

const App = () => {
  const [entries, setEntries] = useState(messages);

  const handleLike = (id) => {
    setEntries((currentEntries) =>
      currentEntries.map((entry) =>
        entry.id === id
          ? {...entry, liked: !entry.liked}
          : entry
      )
    );
  };

  const totalLikes = entries.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} onLike={handleLike} />
      </main>
    </div>
  );
};

export default App;
