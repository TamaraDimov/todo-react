/* eslint-disable react/require-default-props */
import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="inputField"
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button className="submit" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <span>{message}</span>
    </div>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func,
};

export default InputTodo;
