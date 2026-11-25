import ChatEntry from './ChatEntry.jsx';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onLikeToggle }) => {
    return (
        <div className="chat-log">
            {entries.map((entry) => {
                return (
                    <ChatEntry
                        key={entry.id}
                        sender={entry.sender}
                        body={entry.body}
                        timeStamp={entry.timeStamp}
                        id={entry.id}
                        liked={entry.liked}
                        onLikeToggle={onLikeToggle}
                    />
                );
            })}
        </div>
    );
};
ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
    onLikeToggle: PropTypes.func.isRequired,
};

export default ChatLog;