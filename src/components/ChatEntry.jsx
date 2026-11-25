import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ChatEntry = ({ id, sender, body, timeStamp, onHeartClick }) => {
  const heartClicked = () => {
    const likedMultiple = !liked;
    setLiked(likedMultiple);
    onHeartClick(id, likedMultiple);
  };

  const [liked, setLiked] = useState(false);
  const buttonText = liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={heartClicked}>
          {buttonText}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
