import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry, i) => {
    return (
      <li>
        <ChatEntry
          key={i}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          onHeartClick={props.onHeartClick}
        ></ChatEntry>
      </li>
    );
  });

  return (
    <section>
      <ul>{chatEntries}</ul>
    </section>
  );
};

export default ChatLog;
