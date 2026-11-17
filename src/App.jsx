import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import data from './data/messages.json';
import { useState } from 'react';

const App = () => {

  const [senderData, setSenderData] = useState(data);

  return (
    <div id="App">
      <header>
        <h1>React Chat Log</h1>
      </header>
      <main>
        <ChatLog entries={senderData}/>
        {/* <ChatEntry sender={senderData[0].sender} body={senderData[0].body} timeStamp={senderData[0].timeStamp}/> */}
      </main>
    </div>
  );
};

export default App;
