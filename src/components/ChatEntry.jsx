import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  return (
    <article className={`chat-entry ${props.messageType}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp time={props.timeStamp} />
        <button className="like"
          onClick={() => props.onLike(props.id)}
        >
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default ChatEntry;
