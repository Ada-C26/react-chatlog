import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { LOCAL, REMOTE } from '../constants';

const ChatEntry = (props) => {
  const side = props.isLocal ? LOCAL : REMOTE;
  const { sender, body, timeStamp } = props;

  return (
    <article className={`chat-entry ${side}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <div className="entry-footer">
          <p className="entry-time">
            <TimeStamp time={timeStamp} />
          </p>
          <button className="like">🤍</button>
        </div>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLocal: PropTypes.bool,
};

export default ChatEntry;
