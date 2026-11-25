import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import Header from './components/Header';
import { getDefaultColors } from './helpers';

const App = () => {
  const [entries, setEntries] = useState(messages);
  const [colors, setColors] = useState(getDefaultColors(messages));

  // updates liked in state only (NOT writing in the file)
  // uses the previous state so quick clicks don't overwrite each other
  const handleLikeToggle = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, liked: !entry.liked } : entry
      )
    );
  };

  const handleColorChange = (person, color) => {
    setColors((prevColors) => ({ ...prevColors, [person]: color }));
  };

  return (
    <div id="App">
      <Header
        entries={entries}
        colors={colors}
        onColorChange={handleColorChange}
      />
      <main>
        <ChatLog
          entries={entries}
          colors={colors}
          onLikeToggle={handleLikeToggle}
        />
      </main>
    </div>
  );
};

export default App;
