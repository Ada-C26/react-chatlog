import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

function ChatLog({ entries }) {
  return (
    <section className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      ))}
    </section>
  );
}

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;