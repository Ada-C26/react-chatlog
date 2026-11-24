import './App.css';
import messages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
          sender={messages[0].sender}
          body={messages[0].body}
          timeStamp={messages[0].timeStamp}
        />
      </main>
    </div>
  );
};

export default App;


/*
Wave 01 Presentational Component (Chat Entry)
- import messages and ChatEntry
- render one ChatEntry <ChatEntry propName={messages[0].propName}/> to test
 */
