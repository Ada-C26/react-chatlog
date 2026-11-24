import { useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messageData from './data/messages.json';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const message = messageData[0];
  const [chatMsg, setChatMsg] = useState(messageData);
  const [localColor,setLocalColor] = useState('black');
  const [remoteColor,setRemoteColor] = useState('black');

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
      <header className='app-header'>
        <h1>Chat between Vladimir and Estragon 💬</h1>
      </header>
      
      <section className='color-bar'>
        <div className="local-colors">
          <h2>Vladimir's color:</h2>
          <ColorChoice setColorCallback={setLocalColor} />
        </div>
        <div className="likes-count">
          <h2>{totalLikes} ❤️s</h2>
        </div>

        <div className="remote-colors">
          <h2>Estragon's color:</h2>
          <ColorChoice setColorCallback={setRemoteColor} />
        </div>
      </section>

      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry 
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp} /> */}
        <ChatLog 
          entries={chatMsg} 
          onLike={handleLike}
          localColor={localColor}
          remoteColor={remoteColor}
        />
      </main>
    </div>
  );
};

export default App;
