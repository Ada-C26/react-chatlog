import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';


const ChatEntry = ({ sender, body, timeStamp, id, liked, onLikeToggle}) => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <article className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={() => onLikeToggle(id)}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes establishing what ChatEntry expects form parent
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatEntry;
