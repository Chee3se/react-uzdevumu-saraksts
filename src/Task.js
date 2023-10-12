import React, {useState} from 'react'; 

export default function Task(params) {
    const [Completed, setCompleted] = useState(params.info[1].completed)

    function handleChange(event) {
      setCompleted(!Completed)
      const Data = JSON.parse(localStorage.getItem('data'))
      Data[event.target.value].completed = !Completed
      localStorage.setItem('data', JSON.stringify(Data))
    }
    function handleClick(event) {
      if (event.altKey) {
        //Getting p
        const p = document.getElementById(`p${params.info[1].id}`)
        //Creating input
        const input = document.createElement("input")
        input.id = `input${params.info[1].id}`
        input.value = p.textContent
        //Lastly
        p.parentElement.appendChild(input)
        p.remove()
        //Setting up input
        input.addEventListener('keypress', (e)=>{
          if (e.key === 'Enter') {
            const input = document.getElementById(`input${params.info[1].id}`)
            const p = document.createElement("p")
            p.onclick = handleClick
            p.id = `p${params.info[1].id}`
            p.textContent = input.value
            input.parentElement.appendChild(p)
            input.remove()
            //Saving
            const Data = JSON.parse(localStorage.getItem('data'))
            Data[params.info[1].id-1].title = input.value
            localStorage.setItem('data', JSON.stringify(Data))
          }
        })
      }
    }

    return (
      <div className="task">
        <div>
          <img src="person.svg" alt="person"/>
          <p>{params.info[1].userId}</p> 
        </div>
        <label htmlFor={params.info[1].id}>
          <input id={params.info[1].id} type="checkbox" name="completed" value={(params.info[1].id)-1} checked={params.info[1].completed} onChange={handleChange}/>
          <span></span>
        </label>
        <p id={"p"+params.info[1].id} onClick={handleClick}>{params.info[1].title}</p>
      </div>
    );
  }