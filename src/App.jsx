import './App.css';
import ChatLog from './components/ChatLog';
import initialMessageData from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [messageData, setMessageData] = useState(initialMessageData);

  return (
    <div id="App">
      <header>
        <h1>Chat</h1>
      </header>
      <main>
        <ChatLog entries={messageData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
