import PropTypes from 'prop-types';

const ColorChoice = ({ sender, color, setColorCallback }) => {
  return (
    <div className="color-choice">
      <label htmlFor={`color-${sender}`}>{sender}'s color:</label>

      <input
        id={`color-${sender}`}
        type="color"
        value={color}
        onChange={(event) => setColorCallback(event.target.value)}
      />
    </div>
  );
};

ColorChoice.propTypes = {
  sender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setColorCallback: PropTypes.func.isRequired,
};

export default ColorChoice;
