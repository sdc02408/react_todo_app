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


// let Expromise = function(param){
//   return new Promise((resolve, reject) =>{
//     if(param && param>0){
//       resolve('posivite');
//     }
//     else if(param && param<0){
//       resolve('negative');
//     }
//     else if(param === 0){
//       throw 'error';
//     }
//     else{
//       //nothing
//     }
//   })
// }
//
// Expromise(1)
// .then(data => console.log(data));
//
// Expromise(-1)
// .then(data => console.log(data), error => console.log(error))
// .catch(error => console.log(error))
//
//
// setTimeout(function() {
//   console.log('a')
//   setTimeout(function() {
//     console.log('b')
//     setTimeout(function() {
//       console.log('c')
//     }, 1000)
//   }, 1000)
// }, 1000)
//
// new Promise(resolve => {
//   resolve('A');
// }).then(data => {
//   console.log(data);
//   return 'B';
// })
//
// new Promise(resolve => {
//   setTimeout(() => {
//     resolve('A');
//   }, 1000);
// }).then(data => {
//   console.log(data);
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('B');
//     }, 1000)
//   })
// }).then(data => {
//   console.log(data);
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('C');
//     }, 1000)
//   })
// }).then(data => console.log(data));
//
// const promiseA = new Promise(resolve => {
//   setTimeout(function(){
//     resolve('A');
//   }, 1000);
// });
//
// const promiseB = new Promise(resolve => {
//   setTimeout(function(){
//     resolve('B');
//   }, 1000);
// });
//
// const promiseC = new Promise(resolve => {
//   setTimeout(function(){
//     resolve('C');
//   }, 1000);
// });
//
//
// Promise.all([promiseA, promiseB, promiseC])
// .then(values => console.log(values))

async function print () {
  const data1= await new Promise(resolve => {
    setTimeout(()=> {
      resolve('A');
    },1000);
  });
  console.log(data1);
  
  const data2 = await new Promise( resolve=> {
    setTimeout(()=> {
      resolve('B');
    }, 2000)
  });
  console.log(data2)
  
  const data3 = await new Promise( resolve => {
    resolve('C')
  }, 3000)
  console.log(data3);
}

print();


export default React.memo(TodoList);


