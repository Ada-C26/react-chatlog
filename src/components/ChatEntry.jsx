import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  role,
  onLikeToggle,
}) => {

  const likeButtonClicked = () => {
    onLikeToggle(id);
  };

  const likeButtonColor = liked ? '❤️' : '🤍';

  const roleClass =
    role === 'local'
      ? 'chat-entry local'
      : 'chat-entry remote';

  return (
    <article className={roleClass}>
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        <p>{body}</p>

        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>

        <button
          className="like"
          onClick={likeButtonClicked}
        >
          {likeButtonColor}
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
  role: PropTypes.string,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatEntry;
