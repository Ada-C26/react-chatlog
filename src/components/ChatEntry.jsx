import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, setLikesCount, toggleLiked }) => {
    const onClickHandler = () => {
        setLikesCount(prev => prev + (liked ? -1 : 1));
        toggleLiked(id);
    };

    const heart = liked ? '❤️' : '🤍';

  return (
    <article className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button onClick={onClickHandler} className="like">{heart}</button>
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
  setLikesCount: PropTypes.func.isRequired,
  toggleLiked: PropTypes.func.isRequired
};

export default ChatEntry;