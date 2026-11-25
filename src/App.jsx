import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {

  const [entryData, setEntryData] = useState(messages);

  const members = [...new Set(entryData.map((entry) => entry.sender))];
  const localSender = members[0];

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
        <h1>Chat Between {members.join(' and ')}</h1>
        <h2>{calcNumberOfLikes()} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={entryData}
          onHandleLikeClick={handleLikeClick}
          localSender={localSender}
        />
      </main>
    </div>
  );
};

export default App;
