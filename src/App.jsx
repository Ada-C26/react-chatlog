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

const App = () => {
  const [chatData, setChatData] = useState(
    () => initializeMessages(DATA)
  );
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
