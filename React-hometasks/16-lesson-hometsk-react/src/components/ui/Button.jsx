import PropTypes from "prop-types";

function Button({ title }) {
  return (
    <button className="bg-btnColor py-1 px-3 rounded-lg hover:bg-btnHoverColor transition-all duration-300 ease-in-out text-cyan-50 active:scale-90">
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
