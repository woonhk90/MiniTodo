import React from 'react'
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';
import './style.css';

function Layout() {
  const [arr, setArr] = React.useState([]);
  const [num, setNum] = React.useState('');

  const addTodo = (addArr)=>{
    const newArr = [...arr,addArr];
    setArr(newArr);
  }

  const deleteArr = (id) => {
    // 배열에 id값이 있을경우 보이지 않게 한다.
    // const newArr = [...arr,addArr];

    //새로운 배열을 만들어준다
    setArr(arr.filter((v)=>v.id!==id))
  }
  
  const trueBtn = (id) => {
    console.log("BBBBBBBBBBBBBBBBBBBBBBBBBB",id);
    setArr(
      arr.map(function(v){
        if(id===v.id){
          if(v.done){
            v.done=false;
          }else{
            v.done=true;
          }
        }
        return v;
      })
    );
  }
  
console.log('111:->',arr);
console.log('333:->',num);
  return (
    <>
      <div className='layout-div'>
        <Header/>
        <Form arr={addTodo} newArr={arr} />
        <List todoList={arr} num={num} setNum={setNum} deleteArr={deleteArr} trueBtn={trueBtn}/>
      </div>
    </>
  )
}

export default Layout;