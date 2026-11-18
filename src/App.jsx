import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import data from './data/messages.json';
import { useState } from 'react';

const App = () => {

  const [senderData, setSenderData] = useState(data);

  let numberOfLikes = 0;

  const toggleHeart = (senderId) => {
    const senders = senderData.map(sender => {
      if (sender.id === senderId) {
        return {...sender, liked: !sender.liked};
      } else {
        return sender;
      }
    });

    setSenderData(senders);

  };



  return (
    <div id="App">
      <header>
        <h1>React Chat Log - {numberOfLikes}❤️s</h1>
      </header>
      <main>
        <ChatLog entries={senderData} toggleHeart={toggleHeart}/>
      </main>
    </div>
  );
};

export default App;
