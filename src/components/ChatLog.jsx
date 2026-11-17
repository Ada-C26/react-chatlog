import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';


const ChatLog = ({ entries }) => {
    const senderComponents = entries.map((sender, index) => {
        return (
            <section key={sender.id} className="chat-log">
                <ChatEntry id={sender.id} sender={sender.sender} body={sender.body} timeStamp={sender.timeStamp}/>
            </section>
        )
    })
    return (
        <div>
            {senderComponents}
        </div>
    )
}


ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired
        })
    )

};

export default ChatLog;