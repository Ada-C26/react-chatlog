import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onLikedChanged }) => {
  const chatEntryComponents = entries.map( (entry) => <ChatEntry {...entry} onLikedChanged={onLikedChanged}></ChatEntry> );

  return (
    <div className="chat-log">
      {chatEntryComponents}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onLikedChanged: PropTypes.func.isRequired
};

export default ChatLog;
