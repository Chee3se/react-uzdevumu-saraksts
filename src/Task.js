export default function Task(params) {
    return (
      <div className="task">
        <input type="checkbox" checked={params.info[1].completed} /> 
        <label></label>
        <p>{params.info[1].title}</p>
      </div>
    );
  }