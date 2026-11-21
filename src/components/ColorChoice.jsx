import PropTypes from "prop-types";

const ColorChoice = ({ setColorCallback, numberOfLikes }) => {
  return (
    <section>
      <section className="widget">
        <h3>Vladimir's color:</h3>
        <button
          className="red"
          onClick={() => setColorCallback("Vladimir", "red")}
        >
          &#9679;
        </button>
        <button
          className="orange"
          onClick={() => setColorCallback("Vladimir", "orange")}
        >
          &#9679;
        </button>
        <button
          className="yellow"
          onClick={() => setColorCallback("Vladimir", "yellow")}
        >
          &#9679;
        </button>
        <button
          className="green"
          onClick={() => setColorCallback("Vladimir", "green")}
        >
          &#9679;
        </button>
        <button
          className="blue"
          onClick={() => setColorCallback("Vladimir", "blue")}
        >
          &#9679;
        </button>
        <button
          className="purple"
          onClick={() => setColorCallback("Vladimir", "purple")}
        >
          &#9679;
        </button>
      </section>
      <section id="heartWidget" className="widget">
        {numberOfLikes} ❤️s
      </section>
      <section className="widget">
        <h3>Estragon's color:</h3>
        <button
          className="red"
          onClick={() => setColorCallback("Estragon", "red")}
        >
          &#9679;
        </button>
        <button
          className="orange"
          onClick={() => setColorCallback("Estragon", "orange")}
        >
          &#9679;
        </button>
        <button
          className="yellow"
          onClick={() => setColorCallback("Estragon", "yellow")}
        >
          &#9679;
        </button>
        <button
          className="green"
          onClick={() => setColorCallback("Estragon", "green")}
        >
          &#9679;
        </button>
        <button
          className="blue"
          onClick={() => setColorCallback("Estragon", "blue")}
        >
          &#9679;
        </button>
        <button
          className="purple"
          onClick={() => setColorCallback("Estragon", "purple")}
        >
          &#9679;
        </button>
      </section>
    </section>
  );
};

ColorChoice.propTypes = {
  setColorCallback: PropTypes.func.isRequired,
  numberOfLikes: PropTypes.number.isRequired,
};

export default ColorChoice;
