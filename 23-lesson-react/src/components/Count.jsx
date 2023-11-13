/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapState = (state) => {
  return { count: state.count };
};

const mapDispatch = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INC" }),
    decrement: () => dispatch({ type: "DEC" }),
  };
};

function Count({ count, increment, decrement }) {
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

// ==========>> 1 - usul
export default connect(mapState, mapDispatch)(Count);

// ======>> 2 - usul
// export default connect(
//   (state) => ({ count: state.count }),
//   (dispatch) => ({
//     increment: () => dispatch({ type: "INC" }),
//     decrement: () => dispatch({ type: "DEC" }),
//   })
// )(Count);

Count.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};
