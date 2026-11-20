import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onToggleHeart }) => {
  const chatEntries = entries.map((entry) => {
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        key={entry.id}
        onToggleHeart={onToggleHeart}
      />
    );
  });

  return (
    <section className="chat-log">
      <div>{chatEntries}</div>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onToggleHeart: PropTypes.func.isRequired,
};

export default ChatLog;
