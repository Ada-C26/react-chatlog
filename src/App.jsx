import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import Header from './components/Header';
import { PERSON_COLORS } from './constants';
import { getPersonsInChat } from './helpers';

// start each person with a default color: { Vladimir: 'green', Estragon: 'blue' }
const getDefaultColors = (entries) => {
  const colors = {};
  getPersonsInChat(entries).forEach((person, index) => {
    colors[person] = PERSON_COLORS[index % PERSON_COLORS.length];
  });
  return colors;
};

const App = () => {
  const [entries, setEntries] = useState(messages);
  const [colors, setColors] = useState(getDefaultColors(messages));

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

  const handleColorChange = (person, color) => {
    setColors({ ...colors, [person]: color });
  };

  return (
    <div id="App">
      <Header
        entries={entries}
        colors={colors}
        onColorChange={handleColorChange}
      />
      <main>
        <ChatLog entries={entries} onLikeToggle={handleLikeToggle} />
      </main>
    </div>
  );
};

export default App;
