import React,{useState} from 'react'
import './style.css';


function Form(props) {
  const [tit, setTit] = useState('');
  const [con, setCon] = useState('');
  function addTitle (e) {
    setTit(e.target.value);
  }
  function addContent (e) {
    setCon(e.target.value);
  }

  function onChk(e){
    e.preventDefault();
      const setArr = {
      done:false,
      title:tit,
      content:con,
      id:Date.now()
    }
    // console.log("setArr:",setArr);
    props.arr(setArr);
  }

  return (
    <>
      <form className="form-div" onSubmit={onChk}>
        <div>
          <label htmlFor="tit">제목</label>
          <input id="tit" type="text" onChange={addTitle} value={tit}/>
          <label htmlFor="content">내용</label>
          <input id="content" type="text" onChange={addContent} value={con}/>
        </div>
        <div>
          <button type="submit">추가하기</button>
        </div>
      </form>
    </>
  )
}

export default Form;