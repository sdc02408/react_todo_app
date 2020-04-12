import React,{useState,useCallback} from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

//새로운 항목을 입력하고 추가할 수 있는 컴포, state를 토앻 인풋의 상태 관리.

const TodoInsert = ({onInsert}) => {
  
  const [value,setValue] = useState('');
  
  
  const onChange = useCallback(e => {
    setValue(e.target.value);
  },[]);
  
  
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');//value값 초기화
      //submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
      //이를 방지하기 위해 이 함수를 호출.
      e.preventDefault()
    },
    [onInsert, value],
  )
  
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      
      <input placeholder="할일을 입력하세요"
      value={value}
      onChange={onChange}
      />
      
      <button type="submit">
        <MdAdd></MdAdd>
      </button>
      
    </form>
    
  )
}

export default TodoInsert
