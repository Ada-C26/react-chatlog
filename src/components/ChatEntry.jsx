import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({ sender, body, timeStamp }) => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  message: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatEntry;
