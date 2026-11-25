import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onHandleLikeClick, localSender }) => {

  const chatEntryComponents = entries.map((entry) => (
    <ChatEntry
      key={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      onHandleLikeClick ={() => onHandleLikeClick(entry.id)}
      isLocal={entry.sender === localSender}
    />
  ));

  return (
    <section className="chat-log">
      {chatEntryComponents}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })).isRequired,
  onHandleLikeClick: PropTypes.func.isRequired,
  localSender: PropTypes.string.isRequired,
};

export default ChatLog;