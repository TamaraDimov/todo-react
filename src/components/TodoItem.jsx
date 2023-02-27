/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button className="clearbtn" onClick={() => delTodo(itemProp.id)}>
        Delete
      </button>
      {itemProp.title}
    </li>
  );
};
export default TodoItem;
