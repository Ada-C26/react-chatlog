import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { LOCAL, REMOTE, LIKED_HEART, UNLIKED_HEART } from '../constants';

const ChatEntry = (props) => {
  const { id, sender, body, timeStamp, liked, onLikeToggle } = props;
  const side = props.isLocal ? LOCAL : REMOTE;
  const likeButton = liked ? LIKED_HEART : UNLIKED_HEART;

  return (
    <article className={`chat-entry ${side}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <div className="entry-footer">
          <p className="entry-time">
            <TimeStamp time={timeStamp} />
          </p>
          <button className="like" onClick={() => onLikeToggle(id)}>
            {likeButton}
          </button>
        </div>
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
  isLocal: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatEntry;
