import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({entries, onLike, localColors, remoteColors}) => {
  const localSender = entries[0]?.sender;

  return (
    <div className="chat-log">
      {entries.map((entry) => {
        const isLocal = entry.sender === localSender;
        const colors = isLocal ? localColors : remoteColors;

        return (
          <ChatEntry
            key={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            onLike={() => onLike(entry.id)}
            isLocal={entry.sender === localSender}
            backgroundColor={colors.background}
            textColor={colors.text}
          />
        );
      })}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onLike: PropTypes.func.isRequired,
  localColors: PropTypes.object.isRequired,
  remoteColors: PropTypes.object.isRequired,
};

export default ChatLog;