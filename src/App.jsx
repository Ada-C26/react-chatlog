import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {

  const [entryData, setEntryData] = useState(messages);

  const handleLikeClick = (id) => {
    setEntryData((currentEntries) =>
      currentEntries.map((entry) =>
        entry.id === id ? { ...entry, liked: !entry.liked } : entry
      )
    );
  };

  const calcNumberOfLikes = () => {
    let numberOfLikes = 0;
    for (const entry of entryData) {
      if (entry.liked) {
        numberOfLikes++;
      }
    }
    return numberOfLikes;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <h2>{calcNumberOfLikes()} ❤️s</h2>
      </header>
      <main>
        {/* Wave 02: Render ChatLog component*/}
        <ChatLog entries={entryData} onHandleLikeClick={handleLikeClick}/>
      </main>
    </div>
  );
};

export default App;
