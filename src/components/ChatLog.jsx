import './ChatLog.css';
import ChatEntry from './ChatEntry.jsx'
import PropTypes from 'prop-types';

const Chatlog = (props) => {
   return (
    <div>
    {props.entries.map((message) => (
        <ChatEntry 
            key = {message.id}
            sender = {message.sender}
            body = {message.body}
            timeStamp = {message.timeStamp}
            liked = {message.liked}
            toggleLike = {props.toggleLike}
            id = {message.id}
        /> 
        ))}
    </div>
   );
};

Chatlog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default Chatlog;