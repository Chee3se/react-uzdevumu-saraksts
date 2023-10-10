import React from 'react';
import './App.css';
import Task from "./Task"
import {useState, useEffect} from 'react'

export default function App() {
  const [Data, setData] = useState("")
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => setData(data))
  },[])
  return (
    <>
      <h1>yes</h1>
      {Object.entries(Data).map((item, i)=>{
        return <Task key={i} info={item}></Task>
      })}
    </>
  );
}
