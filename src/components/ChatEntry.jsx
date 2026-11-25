import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, body, timeStamp, liked, onHandleLikeClick, isLocal } ) => {

  return (
    <div className={`chat-entry ${isLocal ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="like" onClick={onHandleLikeClick}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onHandleLikeClick: PropTypes.func.isRequired,
  isLocal: PropTypes.bool.isRequired,
};

export default ChatEntry;
