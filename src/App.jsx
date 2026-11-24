import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(messages);
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog
          entries={messages}
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

/*
Wave 02 Container Component (Chat Log)
- import ChatLog
- remove ChatEntry import
- replace the test ChatEntry
  <ChatEntry
          sender={messages[0].sender}
          body={messages[0].body}
          timeStamp={messages[0].timeStamp}
  />
  with the actual chat
  <ChatLog
          entries={messages}
  />
 */

  /*
Wave 03: Event Handling and Lifting Up state (Likes)
- import useState
- Create state from the JSON
  - const [entries, setEntries] = useSTate(messages);
- Pass the state to ChatLog instead of teh raw JSON.... Where I left off.
*/
