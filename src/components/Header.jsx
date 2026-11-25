import './Header.css';
import PropTypes from 'prop-types';
import ColorChoice from './ColorChoice';
import { LIKED_HEART } from '../constants';
import { getCountLikes, getPersonsInChat } from '../helpers';

const Header = ({ entries, colors, onColorChange }) => {
  const persons = getPersonsInChat(entries);
  const likesCount = getCountLikes(entries);

  // give each person their chosen color, and put "and" between the names
  const coloredPersons = persons.map((person, index) => (
    <span key={person}>
      {index > 0 && ' and '}
      <span className={colors[person]}>{person}</span>
    </span>
  ));

  // one color picker for each person
  const colorChoices = persons.map((person) => (
    <ColorChoice
      key={person}
      person={person}
      color={colors[person]}
      setColorCallback={onColorChange}
    />
  ));

  return (
    <header>
      <h1>Chat between {coloredPersons}</h1>
      <section>
        {colorChoices[0]}
        <span id="heartWidget" className="widget">
          {likesCount} {LIKED_HEART}s
        </span>
        {colorChoices.slice(1)}
      </section>
    </header>
  );
};

Header.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default Header;
