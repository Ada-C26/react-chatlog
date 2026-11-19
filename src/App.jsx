
import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/Color';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(messages);

  const [localColors, setLocalColors] = useState({
    background: '#91ce29',
    text: '#000000',
  });

  const [remoteColors, setRemoteColors] = useState({
    background: '#e7e5f7',
    text: '#25243a',
  });

  const handleLike = (id) => {
    setEntries((currentEntries) =>
      currentEntries.map((entry) =>
        entry.id === id
          ? { ...entry, liked: !entry.liked }
          : entry
      )
    );
  };

  const totalLikes = entries.filter((entry) => entry.liked).length;

  const participants = [...new Set(entries.map((entry) => entry.sender))];

  return (
    <div id="App">
      <header>
        <h1>Chat between {'  '}
          {participants.map((participant, index) => {
            const isLocal = index === 0;
            const colors = isLocal ? localColors : remoteColors;

            return(
              <span key={participant}>
                <span style={{color: colors.background}}>
                  {participant}
                </span>
                {index < participant.length - 1 ? ' and ' : ''}
              </span>
            );
          })}
        </h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>

      <main>
        <div className="color-settings">
          <ColorChoice
            label={`${participants[0]}'s messages`}
            backgroundColor={localColors.background}
            textColor={localColors.text}
            onBackgroundChange={(value) =>
              setLocalColors({ ...localColors, background: value })
            }
            onTextChange={(value) =>
              setLocalColors({ ...localColors, text: value })
            }
          />

          <ColorChoice
            label={`${participants[1]}'s messages`}
            backgroundColor={remoteColors.background}
            textColor={remoteColors.text}
            onBackgroundChange={(value) =>
              setRemoteColors({ ...remoteColors, background: value })
            }
            onTextChange={(value) =>
              setRemoteColors({ ...remoteColors, text: value })
            }
          />
        </div>

        <ChatLog
          entries={entries}
          onLike={handleLike}
          localColors={localColors}
          remoteColors={remoteColors}
        />
      </main>
    </div>
  );
};

export default App;
