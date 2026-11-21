import "./App.css";
import ChatEntry from "./components/ChatEntry";
import ChatLog from "./components/ChatLog";
import ColorChoice from "./components/ColorChoice";
import data from "./data/messages.json";
import { useState } from "react";

const App = () => {
  const [senderData, setSenderData] = useState(data);
  const [vladimirColor, setVladimirColor] = useState("blue");
  const [estragonColor, setEstragonColor] = useState("blue");

  const changeTextColor = (side, color) => {
    if (side === "Vladimir") {
      setVladimirColor(color);
    } else {
      setEstragonColor(color);
    }
  };

  const toggleHeart = (senderId) => {
    const senders = senderData.map((sender) => {
      if (sender.id === senderId) {
        return { ...sender, liked: !sender.liked };
      } else {
        return sender;
      }
    });

    setSenderData(senders);
  };

  let numberOfLikes = 0;
  for (const sender of senderData) {
    if (sender.liked === true) {
      numberOfLikes += 1;
    }
  }

  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span className={vladimirColor}>Vladimir</span> and{" "}
          <span className={estragonColor}>Estragon</span>
        </h1>
        <ColorChoice
          setColorCallback={changeTextColor}
          numberOfLikes={numberOfLikes}
        />
      </header>
      <main>
        <ChatLog
          entries={senderData}
          toggleHeart={toggleHeart}
          vladimirColor={vladimirColor}
          estragonColor={estragonColor}
        />
      </main>
    </div>
  );
};

export default App;
