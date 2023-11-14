/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Todo from "./todo";

const mapState = (state) => {
  return { todos: state.todos };
};

function TodoList(props) {
  return (
    <div className="mt-2 w-full">
      {props.todos.map((todo) => {
        return <Todo key={todo?.id} {...todo} />;
      })}
    </div>
  );
}

export default connect(mapState, () => ({}))(TodoList);

TodoList.propTypes = {
  todos: PropTypes.array,
};
