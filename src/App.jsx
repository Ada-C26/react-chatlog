import './App.css';
import DATA from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

// Initialize messages with local and remote roles
const initializeMessages = (data) => {
  const remoteSender = data[1]?.sender;

  return data.map((chat) => {
    return {
      ...chat,
      role: chat.sender === remoteSender ? 'remote' : 'local',
    };
  });
};

// Toggle the liked status of a message
const handleLikedChat = (chat) => {
  return {
    ...chat,
    liked: !chat.liked,
  };
};

// Count the total number of liked messages
const countLikes = (chatData) => {
  return chatData.reduce((sum, chat) => {
    return sum + (chat.liked ? 1 : 0);
  }, 0);
};

const App = () => {
  const [chatData, setChatData] = useState(
    () => initializeMessages(DATA)
  );

  // Get unique participants
  const participants = [...new Set(DATA.map(chat => chat.sender))];

  // Store participant colors together
  const [participantColors, setParticipantColors] = useState(() => {
    return Object.fromEntries(
      participants.map((sender, index) => [
        sender,
        index === 0 ? 'green' : 'blue',
      ])
    );
  });

  // Handle likes
  const handleLikeClicked = (id) => {
    setChatData(prevChatData => {
      return prevChatData.map(chat => {
        return chat.id === id
          ? handleLikedChat(chat)
          : chat;
      });
    });
  };

  // Handle participant colors
  const handleColorClicked = (sender, color) => {
    setParticipantColors(prevColors => ({
      ...prevColors,
      [sender]: color,
    }));
  };

  // Calculate total likes
  const totalLikes = countLikes(chatData);

  return (
    <div id="App">
      <header>
        <h1>
          Chat between{' '}
          {participants.map((sender, index) => (
            <span
              key={sender}
              className={participantColors[sender]}
            >
              {index > 0 && ' and'}
              {sender}
            </span>
          ))}
        </h1>

        <h2>{totalLikes} ❤️s</h2>
      </header>

      <main>
        <ChatLog
          entries={chatData}
          onLikeToggle={handleLikeClicked}
        />
      </main>
    </div>
  );
};

export default App;
