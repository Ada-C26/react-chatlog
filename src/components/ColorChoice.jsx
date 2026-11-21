import './ColorChoice.css';
import PropTypes from 'prop-types';

const COLORS = [
  { name: 'Red', value: '#e11d48' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Yellow', value: '#facc15' },
  { name: 'Green', value: '#16a34a' },
  { name: 'Blue', value: '#2563eb' },
  { name: 'Purple', value: '#9333ea' },
];

const ColorChoice = ({ sender, selectedColor, onSelectedColor }) => {
  return (
    <section className="color-choice-section">
      <h2>
        <span style={{ color: selectedColor }}>{sender}</span>&apos;s color:
      </h2>
      <div
        className="color-dots"
        role="group"
        aria-label={`${sender}'s color choice`}
      >
        {COLORS.map((color) => {
          const isSelected = selectedColor === color.name;

          return (
            <button
              key={color.name}
              type="button"
              className={`color-dot ${isSelected ? 'selected' : ''}`}
              style={{ '--dot-color': color.value }}
              aria-label={color.name}
              aria-pressed={isSelected}
              title={color.name}
              onClick={() => onSelectedColor(color.name)}
            />
          );
        })}
      </div>
    </section>
  );
};

ColorChoice.propTypes = {
  sender: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  onSelectedColor: PropTypes.func.isRequired,
};

export default ColorChoice;
