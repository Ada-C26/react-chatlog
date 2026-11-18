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
  chatColor,
}) => {
  return (
    <article
      className={`chat-entry ${sender === 'Vladimir' ? 'local' : 'remote'}`}
    >
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble" style={{ backgroundColor: chatColor }}>
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
      </section>

      <button className="like" onClick={() => onLike(id)}>
        {liked ? '❤️' : '🤍'}
      </button>
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
  chatColor: PropTypes.string,
};

export default ChatEntry;
