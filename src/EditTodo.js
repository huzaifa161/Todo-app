import React, { useState, memo } from 'react';


const EditTodo = ({ isEdit, editValue, index, onTodoUpdate }) => {
    const [value, setValue] = useState('');
    const onValueChange = e => setValue(e.target.value);
    return isEdit ? (
        <div style={{
            transform: isEdit ? 'scale(1)' : 'scale(0)'
        }} className='edit__todo'>
            <div className='form__group'>
                <input placeholder='What do you want to add?' className='form__group-input'
                    type='text' value={value || editValue} onChange={onValueChange} />
                <button onClick={() => onTodoUpdate(value,index)} className='form__group-button'>Edit</button>
            </div>
        </div>
    ) : null;
}

export default EditTodo;