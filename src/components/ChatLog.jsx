import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry {...entry}></ChatEntry>
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired
};

export default ChatLog;
