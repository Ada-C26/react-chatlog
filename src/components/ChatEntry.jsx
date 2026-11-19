import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = () => {
  return (
    <main className="chat-entry local">
      <h2 className="entry-name">Replace with name of sender</h2>
      <section className="entry-bubble">
        <p>Replace with body of ChatEntry</p>
        <p className="entry-time"><TimeStamp /></p>
        <button className="like">🤍</button>
      </section>
    </main>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export default ChatEntry;
