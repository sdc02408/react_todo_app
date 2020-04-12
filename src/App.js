import React, { useCallback, useState,useRef, useReducer  } from 'react'

import './App.css';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function createBulkTodos () {
  const array = [];
  for(let i =1; i<=2500; i++){
    array.push({
      id:i,
      text:`할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer (todos, action) {
  switch (action.type) {
    case 'INSERT':
      // {type:'INSERT', todo : {id:1, text:'todo', checked:false}}
      return todos.concat(action.todo)
    
    case 'REMOVE':
      // {type: 'REMOVE', id:1}
      return todos.filter(todo => todo.id !== action.id)
    
    case 'TOGGLE':
      // {type:'REMOVE', id:1}
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      )
    default :
      return todos
  }
}




function App() {

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // const [todos, setTodos] = useState(createBulkTodos);
 
  
  //고유값으로 사용될 id
  // ref를 사용하du 변수담기
  const nextId = useRef(2501);
  // const nextId = useRef(4);
  
  
  
  
  //setTodos를 사용 할때 그안에 todos -> 넣어주면 성능향상
  const onInsert = useCallback(text => {

      const todo = {
        id: nextId.current,
        text,
        checked:false,
      };

      // setTodos(todos => todos.concat(todo));  이거대신
    dispatch({type: 'INSERT', todo});
      nextId.current += 1; //nextId +1 씩
    },[]);


  const onRemove = useCallback(
    id => {
      // setTodos(todos => todos.filter(todo => todo.id !==id));
      dispatch({type:'REMOVE', id});
    },[])

  const onToggle = useCallback(
    id => {
      // setTodos( todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo,)
      dispatch({type:'TOGGLE', id});
    },[])




  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      
      
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    
    </TodoTemplate>

  )
}

export default App;
