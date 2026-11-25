import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, onLikeToggle, localSender}) => {

  const side = sender === localSender ? 'local' : 'remote';

  return (
    <article className={`chat-entry ${side}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="like" onClick={() => onLikeToggle(id)}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func,
  localSender: PropTypes.string,
};

export default ChatEntry;



/*
Wave 01: Presentational Component (ChatEntry)
- add imports PropTypes and TimeStamp
- component ChatEntry needs props sender, body, timeStamp
- replace placeholder with <article>
- add props {sender}, {body}, and {timeStamp}
- fill in ChatEntry.prop types with propName: PropTypes.string.isRequired,
 */

/*
Wave 02: Container Component (ChatLog)
- add id and liked to ChatEntry.propTypes
 */

/*
Wave 03: Event Handling and Lifting Up State (Likes)
- in ChatEntry we need to add id, liked, and onLikeToggle call back
- change button to include onClick={() => onLikeToggle(id)}
- In the button show the hart with a ternary {liked ? '❤️' : '🤍'}
- add the onLikeToggle to PropTypes
*/

/*
ENHANCEMENTS
- add localSender to ChatEntry params
- change className= chat-entry local to chat entry {side}
- add local Sender to PropTypes
*/
