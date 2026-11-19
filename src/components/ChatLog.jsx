import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ messages }) => {
  const localSender = messages[0]?.sender;

  const ChatEntryComponent = messages.map((message) => {
    const isLocal = message.sender === localSender;
    return (<ChatEntry key={message.id} {...message} isLocal={isLocal} />);
  });

  return (
    <section className="chat-log">
      {ChatEntryComponent}
    </section>
  );
};


ChatLog.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
};

export default ChatLog;
