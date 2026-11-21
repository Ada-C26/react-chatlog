import "./ChatEntry.css";
import PropTypes from "prop-types";
import TimeStamp from "./TimeStamp";

const ChatEntry = ({
  sender,
  body,
  timeStamp,
  toggleHeart,
  id,
  liked,
  vladimirColor,
  estragonColor,
}) => {
  const heartClicked = () => {
    toggleHeart(id);
  };

  const chatEntrySender = sender === "Estragon" ? "remote" : "local";

  const bodyColor = sender === "Estragon" ? estragonColor : vladimirColor;

  return (
    <article className={`chat-entry ${chatEntrySender}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={bodyColor}>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={heartClicked}>
          {liked ? "❤️" : "🤍"}
        </button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  toggleHeart: PropTypes.func.isRequired,
  vladimirColor: PropTypes.string.isRequired,
  estragonColor: PropTypes.string.isRequired,
};

export default ChatEntry;
