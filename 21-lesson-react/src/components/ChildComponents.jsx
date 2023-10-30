import PropTypes from "prop-types";
import { useEffect } from "react";
function ChildComponents({ add }) {
  useEffect(() => {
    console.log("hello world");
  }, [add]);
  return <div>{add}</div>;
}

export default ChildComponents;

ChildComponents.propTypes = {
  add: PropTypes.func,
};
