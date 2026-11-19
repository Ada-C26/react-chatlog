import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladmir and Estragon</h1>
        <h2>0 ❤️s</h2>
      </header>
      <main>
        < ChatLog
          entries={messages}
        />
      </main>
    </div>
  );
};

export default App;
