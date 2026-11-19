import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, onToggleLike}) => {

  const handleLikeClick = () => {
  onToggleLike?.(id);

  };

  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <article className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button tipe="button" className="like" onClick={handleLikeClick}>{liked ? '❤️' : '🤍'}</button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onToggleLike: PropTypes.func,

};


export default ChatEntry;
