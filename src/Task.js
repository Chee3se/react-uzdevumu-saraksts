import React, {useState} from 'react'; 

export default function Task(params) {
  const [Completed, setCompleted] = useState(params.info[1].completed)
  function handleChange(event) {
    setCompleted(!Completed)
    const Data = JSON.parse(localStorage.getItem('data'))
    Data[event.target.value].completed = !Completed
    console.log(Data[event.target.value])
    localStorage.setItem('data', JSON.stringify(Data))
  }
    return (
      <div className="task">
        <img src="person.svg" alt="person"/>
        <p>{params.info[1].userId}</p>
        <input type="checkbox" name="completed" value={(params.info[1].id)-1} checked={Completed} onChange={handleChange}/> 
        <label></label>
        <p>{params.info[1].title}</p>
      </div>
    );
  }