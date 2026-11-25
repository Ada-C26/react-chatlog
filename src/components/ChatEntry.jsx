import './ChatEntry.css';
import PropTypes from 'prop-types'
import TimeStamp from './TimeStamp.jsx'

const ChatEntry = (entry) => {
  const Likedcolor = entry.liked ? '❤️' : '🤍';

  return (
    <article className="chat-entry local">
      <h2 className="entry-name">{entry.sender}</h2>
      <section className="entry-bubble">
        <p>{entry.body}</p>
        <p className="entry-time"> <TimeStamp time={entry.timeStamp} /></p>
        <button className="like" onClick= {() => entry.toggleLike(entry.id)}>{Likedcolor}</button>
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
  toggleLike: PropTypes.func,
};

export default ChatEntry;
