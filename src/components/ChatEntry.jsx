import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {

  const messageType = props.sender === 'Vladimir' ? 'local' : 'remote';
  // console.log(props.sender);
  // console.log(messageType);

  const likeButtonClicked = () => {
    props.onLikeToggle(props.id);
  };
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <article className={`chat-entry ${messageType}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        {/* Replace with body of ChatEntry</p> */}
        <p>{props.body}</p>
        {/* replace timestamp component */}
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={likeButtonClicked}>
          {props.liked ? '❤️' : '🤍'} </button>
      </section>
    </article>
  );
};


ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func,
};

export default ChatEntry;
