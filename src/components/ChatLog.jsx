import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({
  entries,
  onToggleHeart,
  localUser,
  localColor,
  remoteColor,
}) => {
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
        localUser={localUser}
        localColor={localColor}
        remoteColor={remoteColor}
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
  localUser: PropTypes.string.isRequired,
  localColor: PropTypes.string.isRequired,
  remoteColor: PropTypes.string.isRequired,
};

export default ChatLog;
