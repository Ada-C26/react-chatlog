import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
      </header>
      <main>
        <div>
          <ChatLog entries={messages} />
        </div>
      </main>
    </div>
  );
};

export default App;
