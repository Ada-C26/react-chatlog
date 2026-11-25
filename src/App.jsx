import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {

  const [entries, setEntries] = useState(messages);

  const toggleLike = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, liked: !entry.liked } : entry
      )
    );
  };

  const countLikes = () => {
    return entries.filter((entry) => entry.liked).length;
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          <h2 className="widget" id="heartWidget">{countLikes()} ❤️s</h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={entries}
          onLikeToggle={toggleLike}
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
- Pass the state to ChatLog instead of the raw JSON, in <main>
- wrtie a toggle function inside of App that flips liked for one id without mutating.
- pass the function down to ChatLog as a prop in <main>
- a helper in APP that counts liked entries
  - const countLikes = () => {return entries.fileter((entry) => entry.liked).length};
- call the function in header h2, that in the N heart s format. <h2 className="widget" id="heartWidget">{countLikes()} ❤️s</h2>
- in Chatlog change entries{messages} to entries={entries}
*/
