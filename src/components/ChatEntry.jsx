import './ChatEntry.css';
import PropTypes from 'prop-types'
import TimeStamp from './TimeStamp.jsx'

const ChatEntry = (entry) => {
  return (
    <article className="chat-entry local">
      <h2 className="entry-name">{entry.sender}</h2>
      <section className="entry-bubble">
        <p>{entry.body}</p>
        <p className="entry-time"> <TimeStamp time={entry.timeStamp} /></p>
        <button className="like">🤍</button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
