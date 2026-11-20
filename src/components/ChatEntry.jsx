import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

// const [isLiked,setIsLiked] = useState(false);

// const changeHeart =() => {
//   setIsLiked((previous) => !previous);
// };


const ChatEntry = ({id, sender, body, timeStamp, liked, onLike}) => {

  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={() => onLike(id)}>
          {liked ? '❤️': '🤍'}
        </button>
      </section>
    </div>
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
