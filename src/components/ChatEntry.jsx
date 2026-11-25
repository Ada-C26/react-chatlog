import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  return (
    <article className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button 
          className="like"
          onClick={() => props.onLike(props.id)}
        >
          {props.liked ? '❤️' : '🤍'}
          </button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender:PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number,
  liked: PropTypes.bool,
  onLike: PropTypes.func,
};

export default ChatEntry;
