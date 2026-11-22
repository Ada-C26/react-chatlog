import './App.css';
import messageData from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import { useState } from 'react';

const App = () => {
  // Assuming the current user is the one starting the chat
  const currentUser = messageData[0].sender; // local user
  const remoteUser = messageData.filter(
    (message) => message.sender != currentUser,
  )[0].sender; // remote user

  const [messages, setMessages] = useState(messageData);
  const toggleHeart = (messageId) => {
    setMessages((messages) => {
      return messages.map((message) =>
        message.id === messageId
          ? { ...message, liked: !message.liked }
          : message,
      );
    });
  };

  const heartCount = messages.filter((message) => message.liked).length;

  const [localColor, setLocalColor] = useState('black');
  const pickLocalColor = (color) => setLocalColor(color);

  const [remoteColor, setRemoteColor] = useState('black');
  const pickRemoteColor = (color) => setRemoteColor(color);

  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span style={{ color: localColor }}>{currentUser}</span>{' '}
          and <span style={{ color: remoteColor }}>{remoteUser}</span>
        </h1>
        <section>
          <ColorChoice
            sender={currentUser}
            selectedColor={localColor}
            onSelectedColor={pickLocalColor}
          />
          <h2> {heartCount} ❤️s</h2>
          <ColorChoice
            sender={remoteUser}
            selectedColor={remoteColor}
            onSelectedColor={pickRemoteColor}
          />
        </section>
      </header>
      <main>
        <ChatLog
          entries={messages}
          onToggleHeart={toggleHeart}
          localUser={currentUser}
          localColor={localColor}
          remoteColor={remoteColor}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
