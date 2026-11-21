import "./ChatLog.css";
import PropTypes from "prop-types";
import ChatEntry from "./ChatEntry";

const ChatLog = ({ entries, toggleHeart, vladimirColor, estragonColor }) => {
  const senderComponents = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        toggleHeart={toggleHeart}
        vladimirColor={vladimirColor}
        estragonColor={estragonColor}
      />
    );
  });
  return <section className="chat-log">{senderComponents}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    }),
  ).isRequired,

  toggleHeart: PropTypes.func.isRequired,
  vladimirColor: PropTypes.string.isRequired,
  estragonColor: PropTypes.string.isRequired,
};

export default ChatLog;
