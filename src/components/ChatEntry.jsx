import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const isLocalUser = props.sender === props.localUser;
  const entryClass = isLocalUser ? 'local' : 'remote';
  const entryColor = isLocalUser ? props.localColor : props.remoteColor;

  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className={`chat-entry ${entryClass}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p style={{ color: entryColor }}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={() => props.onToggleHeart(props.id)}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onToggleHeart: PropTypes.func.isRequired,
  localUser: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  localColor: PropTypes.string.isRequired,
  remoteColor: PropTypes.string.isRequired,
};

export default ChatEntry;
