import './App.css';
import ChatEntry from './components/ChatEntry';
import messageData from './data/messages.json';

const App = () => {
  const entry = messageData[0];

  return (
    <div id="App">
      <header>
        <h1>Chat</h1>
      </header>
      <main>
        <ChatEntry {...entry}></ChatEntry>
      </main>
    </div>
  );
};

export default App;
