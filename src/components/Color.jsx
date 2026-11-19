import PropTypes from 'prop-types';

const ColorChoice = ({label, backgroundColor,textColor, onBackgroundChange, onTextChange}) => {
  return (
    <div className="color-choice">
      <h3>{label}</h3>
      <label>Bubble Color
        <input
          type="color"
          value={backgroundColor}
          onChange={(event) => onBackgroundChange(event.target.value)}
        />
      </label>
      <label>
        Text Color
        <input
          type="color"
          value={textColor}
          onChange={(event)=> onTextChange(event.target.value)}
        />
      </label>
    </div>
  );
};

ColorChoice.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  onBackgroundChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default ColorChoice;
