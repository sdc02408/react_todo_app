import React, { useCallback } from 'react'
import './TodoList.scss'
import TodoListItem from './TodoListItem'
import {List} from 'react-virtualized'

//todos배열을 props로 받아온후, 배열 map을 사용해 여러개의 컴포넌트로 변환하여 보여줌.
const TodoList =({todos,onRemove,onToggle}) =>{
  
  //List 컴포넌트 사용하기 위해. List 컴포넌트에서 각 todoitem을 렌더링 할때 사용. list 컴포넌트의 props로 설정.
  const rowRenderer = useCallback(
    ({index,key,style}) => {
      const todo = todos[index];
      
  return (
    <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
        );},
    [onRemove,onToggle,todos],
  );
  
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{outline: 'none'}}
      />
  )
}

export default React.memo(TodoList);
