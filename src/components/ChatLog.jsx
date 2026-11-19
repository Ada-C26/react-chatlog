import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const { entries, onLikeToggle, colors = {} } = props;

  // set the local sender to the first entry's sender
  const localSender = entries[0]?.sender;

  const chatEntryComponents = entries.map((entry) => {
    const isLocal = entry.sender === localSender;
    return (
      <ChatEntry
        key={entry.id}
        {...entry}
        isLocal={isLocal}
        color={colors[entry.sender]}
        onLikeToggle={onLikeToggle}
      />
    );
  });

  return (
    <section className="chat-log">
      {chatEntryComponents}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
  onLikeToggle: PropTypes.func.isRequired,
  colors: PropTypes.objectOf(PropTypes.string),
};

export default ChatLog;
