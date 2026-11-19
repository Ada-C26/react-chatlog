// import ChatEntry from './components/ChatEntry';
// import messages from './data/messages.json';

// function App() {
//   const firstMessage = messages[0];

//   return (
//     <main>
//       <h1>Chat Log</h1>

//       <ChatEntry
//         sender={firstMessage.sender}
//         body={firstMessage.body}
//         timeStamp={firstMessage.timeStamp}
//       />
//     </main>
//   );
// }

// export default App;
// import ChatLog from './components/ChatLog';
// import messages from './data/messages.json';

// function App() {
//   return (
//     <main>
//       <h1>Chat between Vladimir and Estragon</h1>
//       <ChatLog entries={messages} />
//     </main>
//   );
// }

// export default App;
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

function App() {
  const [entries, setEntries] = useState(messages);

  const handleLike = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      }

      return entry;
    });

    setEntries(updatedEntries);
  };

  const countLikes = () => {
    return entries.filter((entry) => entry.liked).length;
  };

  return (
    <main>
      <h1>Chat between Vladimir and Estragon</h1>
      <p>{countLikes()} ❤️s</p>

      <ChatLog entries={entries} onLike={handleLike} />
    </main>
  );
}

export default App;