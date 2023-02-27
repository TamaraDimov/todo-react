/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};
export default TodosList;
