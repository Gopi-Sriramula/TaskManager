import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { addTask, deleteTask, editTask, modifyData } from "../../store";
function AddedTask({setToggle2,state}) {
  const dispatch = useDispatch();
  const { apiStatus, data,wantedData } = useSelector((state) => state.a);
  const data2 = wantedData!=="all"?data.filter(item=>item.status===wantedData):data;
  const data3 = data2.filter((item)=>item.name.toLowerCase().includes(state.toLowerCase()));
  if (data3.length === 0) {
    return (
      <div className="tasks">
        <span className="no-todos">No Tasks</span>
      </div>
    );
  }
  return (
    <div className="added-tasks">
      {data3.map((item,i) => {
        return <Task item={item} key={i} setToggle2={setToggle2}/>
      })}
    </div>
  );
}
const Task = function ({item,setToggle2}) {
  const dispatch = useDispatch();
  const onChange = function (e) {
    dispatch(editTask(item.name))
  };
  const onClick = function(){
    dispatch(deleteTask(item.name));
  }
  const change = function(){
    dispatch(modifyData(item))
    setToggle2(true);
  }
  return (
    <div className="task">
      <div className="task-div1">
        <input
          type="checkbox"
          onChange={onChange}
          checked={item.status === "complete"}
        />
        <div className="details">
          <h4>{(item.status==="incomplete")?item.name:<s>{item.name}</s>}</h4>
          <div className="addedDate">
            <span>{item.time}</span>
            <span>{item.date}</span>
          </div>
        </div>
      </div>
      <div className="task-div2">
        <span className="material-icons edit" onClick={onClick}>delete</span>
        <span className="material-icons edit" onClick={change}>edit</span>
      </div>
    </div>
  );
};
export default AddedTask;
