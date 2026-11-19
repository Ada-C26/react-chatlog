import './ChatEntry.css';
import propTypes from 'prop-types';
import TimeStamp from './TimeStamp';
const ChatEntry = ({sender, body, timeStamp}) => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // id: propTypes.number.isRequired,
  sender: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  timeStamp: propTypes.string.isRequired,
  // liked: propTypes.bool.isRequired
};

export default ChatEntry;
