import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import EditTodo from './EditTodo';
const App = () => {


  const initState = localStorage.getItem('todos');
  const [todos, setTodos] = useState(initState === null ? [] : JSON.parse(initState));
  const [isEdit, setIsEdit] = useState(null);
  const [value, setValue] = useState('');
  const [index, setIndex] = useState(null);
  const onEditChange = (bool) => setIsEdit(bool);
  
  const onTodoUpdate = (value, index) => {
    const newTodos = [...todos];
    newTodos[index] = value;
    setTodos(newTodos);
    setIsEdit(false);
  }
  const addTodo = todo => {
    if (!todo) return;
    setTodos([...todos, todo]);
  }

  const removeTodo = index => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos([...newTodos]);
  }

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
  return (
    <div className="App">
      <AddTodo addTodo={addTodo} removeTodo={removeTodo}/>
      <TodoList
        setIndex={setIndex}
        setValue={setValue} onEditChange={onEditChange} todos={todos} removeTodo={removeTodo} />
     <EditTodo onTodoUpdate={onTodoUpdate} index={index} editValue={value} isEdit={isEdit} />
    </div>
  );
}

export default App;
