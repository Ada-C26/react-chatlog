import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({sender, body, timeStamp}) => {
  return (
    <article className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
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



/*
Wave 01: Presentational Component (ChatEntry)
- add imports PropTypes and TimeStamp
- component ChatEntry needs props sender, body, timeStamp
- replace placeholder with <article>
- add props {sender}, {body}, and {timeStamp}
- fill in ChatEntry.prop types with propName: PropTypes.string.isRequired,
 */
