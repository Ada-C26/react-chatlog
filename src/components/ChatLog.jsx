import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.jsx';

const ChatLog = ({ entries }) => {
  // map entries to ChatEntry components
  const chatEntries = entries.map((entry) => (
    <ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
    />
  ));

  // wrap the mapped list in one element
  return <section className="chat-log">{chatEntries}</section>;
};

// add prop types
ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ChatLog;


/*
Wave 02 Container Component (ChatLog)
- created this file
- add imports ./ChatLog.css, PropTypes, and ChatEntry
- const ChatLog takes entries
  - map entries to ChatEntry components with const ChatEntries = entries.map(entry)
  - enter ChatEntry and the props.
-wrap the mapped list chatEntries in an element like section and give className chat-log
  -return it

- add property types with ChatLog.propTypes
 */
