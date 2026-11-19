import { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import './App.css';


function App() {
  const [entries, setEntries] = useState(messages);
  const handleLike = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });
    setEntries(updatedEntries);
  };
  const countLikes = (entriesList) => {
    return entriesList.filter((entry) => entry.liked).length;
  };
  const chat = ({ firstPerson, secondPerson }) => {
    return (
      <div>
        <h1>Chat between {firstPerson} and {secondPerson}</h1>
        <h2>{countLikes(entries)} ❤️s</h2>
        <ChatLog entries={entries} onLike={handleLike} />
      </div>
    );
  };
  return chat({ firstPerson: 'Vladimir', secondPerson: 'Estragon' });
}


export default App;