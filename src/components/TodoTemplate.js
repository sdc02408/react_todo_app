import React from 'react';
import './TodoTemplate.scss';
//children 으로 내부 jsx를 props로 받아와서 렌더링해준다.
const TodoTemplate = ({children}) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  )
}

export default TodoTemplate;
