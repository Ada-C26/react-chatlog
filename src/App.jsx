import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messageData from './data/messages.json';
const App = () => {
  const message = messageData[0];
  return (
    <div id="App">
      <header>
        <h1>Vibely💬</h1>
        <h2>0💖S</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry 
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp} />
        <ChatLog entries={messageData}/>
      </main>
    </div>
  );
};

export default App;
