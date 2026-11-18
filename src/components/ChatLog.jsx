import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, onLike, vladimirColor, estragonColor }) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLike={onLike}
          chatColor={
            entry.sender === 'Vladimir' ? vladimirColor : estragonColor
          }
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onLike: PropTypes.func.isRequired,
  vladimirColor: PropTypes.string.isRequired,
  estragonColor: PropTypes.string.isRequired,
};

export default ChatLog;
