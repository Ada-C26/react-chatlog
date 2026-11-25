import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, setLikesCount, toggleLiked }) => {
  const processData = (data) => {
    const result = data.map((msg) => (
      <ChatEntry
        key={msg.id}
        id={msg.id}
        sender={msg.sender}
        body={msg.body}
        timeStamp={msg.timeStamp}
        liked={msg.liked}
        setLikesCount={setLikesCount}
        toggleLiked={toggleLiked}
      />
    ));

    return result;
  };

  return <>{processData(entries)}</>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setLikesCount: PropTypes.func.isRequired,
  toggleLiked: PropTypes.func.isRequired
};

export default ChatLog;
