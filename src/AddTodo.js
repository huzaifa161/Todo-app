import React, { useState     } from 'react';
const AddTodo = ({ addTodo, removeTodo}) => {
    const [todo, setTodo] = useState('');
    const [error, setError] = useState('')

    const onAddTodo = () => {
        if (!todo) return setError('Please Enter Todo');
        addTodo(todo);
        setTodo('')
    }

    const onTodoChange = (e) => {
        setTodo(e.target.value);
        setError('');
    }
    return (
        <div>
            <div className='form__group'>
                <input placeholder='What do you want to add?' className='form__group-input' type='text' value={todo} onChange={onTodoChange} />
                <button onClick={onAddTodo} className='form__group-button'>Add Todo</button>
            </div>
            {error && <div className='error'>{error}</div>}
        </div>
    )
};
export default AddTodo;