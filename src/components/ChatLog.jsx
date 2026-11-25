import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <div className="chat-log">
      {props.entries.map((message) => (
        <ChatEntry
          key={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ChatLog;