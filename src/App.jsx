import ChatLog from './components/ChatLog';
import messages from './data/messages';
import { useState } from 'react';

import './App.css';

const App = () => {
  const [likesCount, setLikesCount] = useState(0);

  const likeMessage = (entryId, isLiked) => {
    setLikesCount((likesCount) => likesCount + (isLiked ? +1 : -1));
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <h1>Welcome</h1>
        <section>
          <p>Total likes: {likesCount} ❤️s</p>
        </section>
        <ChatLog entries={messages} onHeartClick={likeMessage} />
      </main>
    </div>
  );
};

export default App;
