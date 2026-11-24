import './ColorChoice.css';
import PropTypes from 'prop-types';

const ColorChoice = ({setColorCallback}) =>{
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  return (

    <div className="color-choice">
      {colors.map((color) => (
        <button 
          key={color}
          className="color-dot"
          style={{ backgroundColor : color }}
          onClick={() => setColorCallback(color)}
        />
      )
      )}
    </div>
  );
};

ColorChoice.propTypes = {
  setColorCallback: PropTypes.func.isRequired,
};

export default ColorChoice;