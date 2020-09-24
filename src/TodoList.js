import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
const TodoList = ({ todos, removeTodo, onEditChange, setValue, setIndex }) => {

    const editChange = (bool, index) => {
        onEditChange(bool);
        setValue(todos[index]);
        setIndex(index);
    }
    return (
        <div className='todo-list'>
            <h2 className='todo-list-heading'>Todos</h2>
            {!todos.length ? <div className='empty'>List is Empty</div>
                : todos.map((todo, index) => (
                    <div className='todo-item' key={index}>
                        <div className='todo-item-value'>{index + 1} ) {todo}</div>
                        <div className='button__group'>
                            <span onClick={() => editChange(true,index)} className='button__group-edit'><FontAwesomeIcon icon={faEdit} /></span>
                            <span onClick={() => removeTodo(index)} className='button__group-delete'><FontAwesomeIcon icon={faTrash} /></span>
                        </div>                    
                    </div>
                ))}
            
        </div>
    )
}
export default TodoList;