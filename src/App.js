import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'

export default function App() {
  const [Data, setData] = useState("")
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => setData(data))
  },[])
  console.log(Data)
  return (
    <>
      {Data.map((item, i)=>{
        
      })}
    </>
  );
}
