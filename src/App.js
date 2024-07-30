import './App.css';
import MyForm from './components/todoForm';
import MyTodo from './components/todo';
import { useEffect, useState } from 'react';
import BurgerMenu from './components/menu'


function App() {
  const [todos, setTodos] = useState([])


 

  //saving to local storege
  useEffect(() => {

    if (todos.length === 0) return;
    localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      
    }, []);

  


  function AddTodo(name){
      setTodos(prev => {
            return [...prev, {name:name, done:false}]
      })

  }

  function removeTodo(indexToRemove) {
    setTodos(prev => {
        return prev.filter((todoObject, index) => index !== indexToRemove);
    });
}


  function updateTodosAdded(todoIndex, newDone) {
    setTodos(prev => {
      const newTodos = [...prev];
      newTodos[todoIndex].done = newDone;
      return newTodos;
    });
  }

  function renameTodo(index, newName){
    setTodos(prev =>{
      const newTodos = [...prev]
      newTodos[index].name = newName
      return newTodos
    })

  }
  
  return (
    <>
    
<BurgerMenu />

<MyForm onAdd={AddTodo} />

{todos.map((todo, index) => (
  <MyTodo
    key={index} // Ensure each item has a unique key
    {...todo}
    onRename={newName => renameTodo(index, newName)}
    onTrash={() => removeTodo(index)}
    onToggle={done => updateTodosAdded(index, done)}
  />
))}

    
    
    </>
  );
}

export default App;
