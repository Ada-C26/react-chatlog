import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import './App.css';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        {/* Wave 02: Render ChatLog component */}
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;
