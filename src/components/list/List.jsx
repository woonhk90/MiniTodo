import React from 'react'
import Todo from '../todo/Todo'
import './style.css'; 

function List({todoList, num, setNum, deleteArr, trueBtn}) {

  return (
    <>
      <div>
        <h2>Working...</h2>
        <div className='false-div'>
          {/* {!todoList.done?<Todo todoList={todoList} num={num} setNum={setNum} deleteArr={deleteArr} trueBtn={trueBtn}/>:null} */}
          {/* {todoList.done!==true?<Todo todoList={todoList} num={num} setNum={setNum} deleteArr={deleteArr} trueBtn={trueBtn}/>:null} */}
          {
            todoList.map((v,i)=>
              v.done===false?
                <div key={v.id}><Todo todoList={v} num={num} setNum={setNum} deleteArr={deleteArr} trueBtn={trueBtn}/></div>:null
            )}
          {/* {todoList.filter((v)=>{
            return v.done===false
          })} */}
        </div>
        <h2>Done...</h2>
        <div className="true-div">
        {
            todoList.map((v,i)=>
              v.done===true?
                <div key={v.id}><Todo todoList={v} num={num} setNum={setNum} deleteArr={deleteArr} trueBtn={trueBtn}/></div>:null
            )}
        </div>
      </div>
    </>
  )
}

export default List;