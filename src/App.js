import React, {useState, useEffect} from 'react';
import './App.css';
import Task from "./Task"

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
  })},[])
  function handleClick(event) {
    setShown(Shown !== 200 ? Shown + 10 : Shown)
  }
  return (
    <>
      {Object.entries(Data).map((item, i)=>{
        return i < Shown ? <Task key={i} info={item}></Task> : null
      })}
      <button className='controller' onClick={handleClick}>show more</button>
    </>
  );
}
