import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onLikedChanged }) => {
  return (
    <article className={`chat-entry local chat-participant-${id}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button className="like" onClick={() => onLikedChanged(id)}>{liked ? '❤️' : '🤍'}</button>
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
  onLikedChanged: PropTypes.func.isRequired
};

export default ChatEntry;
