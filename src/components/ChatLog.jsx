import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  return (
    <div className="chat-log">
      {props.entries.map((entry) => {
        const messageType =
          entry.sender === 'Vladimir' ? 'local' : 'remote';

        return (
          <ChatEntry
            key={entry.id}
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            onLike={props.onLike}
            messageType={messageType}
          />
        );
      })}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onLike: PropTypes.func.isRequired
};

export default ChatLog;
