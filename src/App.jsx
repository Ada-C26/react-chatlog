import { useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messageData from './data/messages.json';

const App = () => {
  const message = messageData[0];
  const [chatMsg, setChatMsg] = useState(messageData);

  const handleLike = (id) => {
    setChatMsg((messages) =>
      messages.map((message) => 
        id === message.id
          ?{...message, liked: !message.liked}
          : message) 
    );
  };

  const totalLikes = chatMsg.reduce((total,msg) => {
    return msg.liked ? total + 1 : total;
  },0);

  return (
    <div id="App">
      <header>
        <h1>Vibely💬</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry 
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp} /> */}
        <ChatLog entries={chatMsg} onLike={handleLike}/>
      </main>
    </div>
  );
};

export default App;
