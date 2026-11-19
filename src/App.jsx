import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';

function App() {
  const firstMessage = messages[0];

  return (
    <main>
      <h1>Chat Log</h1>

      <ChatEntry
        sender={firstMessage.sender}
        body={firstMessage.body}
        timeStamp={firstMessage.timeStamp}
      />
    </main>
  );
}

export default App;