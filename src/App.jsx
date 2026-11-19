import './App.css';
import ChatEntry from './components/ChatEntry';
import messageData from './data/messages.json';
const App = () => {
  const message = messageData[0];
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry 
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp} />
        {/* <ChatLog /> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
