import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';
import './App.css';

const App = () => {
  // Get the first message from the JSON file
  const firstMessage = messages[0];

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        <ChatEntry
          sender={firstMessage.sender}
          body={firstMessage.body}
          timeStamp={firstMessage.timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
