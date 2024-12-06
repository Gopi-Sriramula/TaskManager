import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { checkTask, deleteTask, passData } from "../../../store";
import { useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../App";
function TaskLists() {
  const {onChange} = useContext(AppContext);
  const {pathname} = useLocation();
  const str = pathname.slice(1);
  const { data } = useSelector((state) => state.a);
  const data1 = str===""?data:data.filter(item=>item.status===str);
  const data2 = data1.filter(item=>item.title.toLowerCase().includes(onChange.toLowerCase()));
  if (data2.length === 0) {
    return (
      <div className="no-tasks">
        <button className="btn1">No Tasks</button>
      </div>
    );
  }
  return (
    <div className="tasks-container">
      {data2.map((item,i) => {
        return  <Task item={item} key={item.id}/>
      })}
    </div>
  );
}
const Task = function({item}){
  const {setToggle2}  = useContext(AppContext);
  const dispatch = useDispatch();
  const onChange = function(e){
    dispatch(checkTask(item.id));
  }
  const deleteItem = function(){
    dispatch(deleteTask(item.id));
  }
  const editTask = function(){
    dispatch(passData(item.id));
    setToggle2(true);
  }
  return (
    <div className="task">
      <div className="task-div1">
        <div className="details-div">
          <input type="checkbox" checked={item.status === "complete"} onChange={onChange}/>
          <div className="title-div">
            <h4>{item.status==="complete"?<s>{item.title}</s>:item.title}</h4>
            <p>due:{item.date}</p>
          </div>
        </div>
        <div className="icons-div">
          <span className="material-icons" onClick={editTask}>edit</span>
          <span className="material-icons" onClick={deleteItem}>delete</span>
        </div>
      </div>
      <p className="text">
        {item.desc}
      </p>
    </div>
  );
}

export default TaskLists;
