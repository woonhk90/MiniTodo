import React from 'react';
import './style.css';

function Todo ({todoList, num, setNum, deleteArr, trueBtn}){

  
      return(
        <>
        {/* {todoList.map((v,i)=> */}
          <div className='todo-list'>
            <div>
              <h3>{todoList.title}</h3>
              <p>{todoList.content}</p>
            </div>
            <div>
              <button onClick={()=>deleteArr(todoList.id)}>삭제하기</button>
              <button onClick={()=>{trueBtn(todoList.id)}}>{todoList.done?'취소':'완료'}</button>
            </div>
          </div>
        {/* )} */}
        </>
      )
}





export default Todo;