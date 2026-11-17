import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import './App.css';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>React Chat Log</h1>
      </header>

      <main>
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;
