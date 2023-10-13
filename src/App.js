import React, {useState, useEffect} from 'react';
import styles from "./App.module.css"
import Task from "./Task"
import Add from "./Add"

export default function App() {
  const [Data, setData] = useState("")
  const [Shown, setShown] = useState(10)
  useEffect(()=>{
    //Fetching data
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then((data) => {
      //Checking localstorage
      if (typeof localStorage['data'] !==  'undefined') {
        //is defined
        data = JSON.parse(localStorage.getItem('data'))
      } else {
        //is NOT defined
        localStorage.setItem('data', JSON.stringify(data))
      }
      //Final
      setData(data)
    })
  })
  function handleClick(event) {
    setShown(Shown !== 200 ? Shown + 10 : Shown)
  }
  return (
    <>
      <Add />
      <div id="task-container">
      {Object.entries(Data).map((item, i)=>{
        return i < Shown ? <Task key={i} info={item}></Task> : null
      })}
      </div>
      <button className={styles.controller} onClick={handleClick}>show more</button>
    </>
  );
}
