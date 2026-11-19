
import PropTypes from 'prop-types';

const ColorChoice = ({ setColorCallback }) => {
  return (
    <div>
      <p>Choose a message color:</p>

      <button onClick={() => setColorCallback('#CFE3FF')}>
        Blue
      </button>

      <button onClick={() => setColorCallback('#D5F0D5')}>
        Green
      </button>

      <button onClick={() => setColorCallback('#F8D9E6')}>
        Pink
      </button>

      <button onClick={() => setColorCallback('#E5D8FA')}>
        Purple
      </button>
    </div>
  );
};

ColorChoice.propTypes = {
  setColorCallback: PropTypes.func.isRequired,
};

export default ColorChoice;