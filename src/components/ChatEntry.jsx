import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  onLike,
  isLocal = true,
  color,
}) => {
  return (
    <article className={`chat-entry ${isLocal ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>

      <section
        className="entry-bubble"
        style={isLocal && color ? { backgroundColor: color } : undefined}
      >
        <p>{body}</p>

        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>

        <button
          className="like"
          onClick={() => onLike?.(id)}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onLike: PropTypes.func,
  isLocal: PropTypes.bool,
  color: PropTypes.string,
};

export default ChatEntry;