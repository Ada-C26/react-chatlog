import './App.css';
import ChatLog from './components/ChatLog';
import messageData from './data/messages.json';

const App = () => {
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
