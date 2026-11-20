import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {

  const chatEntryComponents = entries.map((entry, id) => {
    return (
      <div key={id}>
        <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} liked={entry.liked}/>
      </div>
    );
  });

  return (
    <section className="chat-log">
      {chatEntryComponents}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })).isRequired
};

export default ChatLog;