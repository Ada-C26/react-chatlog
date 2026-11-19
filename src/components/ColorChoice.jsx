import './ColorChoice.css';
import PropTypes from 'prop-types';
import { COLOR_OPTIONS } from '../constants';

const ColorChoice = ({ person, color, setColorCallback }) => {
  const colorButtons = COLOR_OPTIONS.map((option) => (
    <button
      key={option.name}
      className="color-button"
      title={option.name}
      onClick={() => setColorCallback(person, option.name)}
    >
      {option.emoji}
    </button>
  ));

  return (
    <section className="widget">
      <h3 className={color}>{person}&apos;s color:</h3>
      {colorButtons}
    </section>
  );
};

ColorChoice.propTypes = {
  person: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setColorCallback: PropTypes.func.isRequired,
};

export default ColorChoice;
