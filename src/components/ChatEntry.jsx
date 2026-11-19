import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({sender, body, timeStamp, liked, onLike, isLocal, backgroundColor, textColor}) => {
  return (
    <article className={`chat-entry ${isLocal ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble"
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        <p>{body}</p>

        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>

        <button className="like" onClick={onLike}>
          {liked ? '❤️' : '🤍'}
        </button>

      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
  isLocal: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default ChatEntry;
