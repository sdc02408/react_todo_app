import React from 'react';
import './TodoList.scss'
import TodoListItem from './TodoListItem'

//todos배열을 props로 받아온후, 배열 map을 사용해 여러개의 컴포넌트로 변환하여 보여줌.
const TodoList =({todos,onRemove,onToggle}) =>{
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
        ))}
    </div>
  )
}

export default TodoList;
