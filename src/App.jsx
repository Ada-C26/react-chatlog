
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

  const handleLikeClicked = (id) => {
    setChatData(prevChatData => {
      return prevChatData.map(chat => {
        return chat.id === id
          ? handleLikedChat(chat)
          : chat;
      });
    });
  };

  const totalLikes = countLikes(chatData);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>

      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
