// import PropTypes from 'prop-types';
// import ChatEntry from './ChatEntry';
// import './ChatLog.css';

// function ChatLog({ entries }) {
//   return (
//     <section className="chat-log">
//       {entries.map((entry) => (
//         <ChatEntry
//           key={entry.id}
//           sender={entry.sender}
//           body={entry.body}
//           timeStamp={entry.timeStamp}
//         />
//       ))}
//     </section>
//   );
// }

// ChatLog.propTypes = {
//   entries: PropTypes.array.isRequired,
// };

// export default ChatLog;
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

function ChatLog({ entries, onLike }) {
  return (
    <section className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLike={onLike}
        />
      ))}
    </section>
  );
}

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default ChatLog;