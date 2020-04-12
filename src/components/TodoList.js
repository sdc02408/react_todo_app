import React, { useCallback } from 'react'
import './TodoList.scss'
import TodoListItem from './TodoListItem'
import {List} from 'react-virtualized'

//todos배열을 props로 받아온후, 배열 map을 사용해 여러개의 컴포넌트로 변환하여 보여줌.
const TodoList =({todos,onRemove,onToggle}) =>{
  const rowRenderer = useCallback(
    ({index,key,style}) => {
      const todo = todos[index];
      
  return (
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

export default React.memo(TodoList);
