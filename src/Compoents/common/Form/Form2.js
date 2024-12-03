import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changedData, modifyData } from "../../../store";

function Form2({ setToggle2 }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.a.selectedTask);
  console.log(data);
  const [state, setState] = useState(undefined);
  const [state2, setState2] = useState(false);
  const onSubmit = function(e){
    e.preventDefault();
    const checkPoint = state===undefined?data?.name:state;
    const checkPoint2 = !state2?data?.status:state2;
    dispatch(changedData({name:data.name,data:{...data,name:checkPoint,status:checkPoint2}}));
    setState(undefined);
    setState2(false);
    setToggle2(false);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Modify Task</h2>
        <div className="label1">
          <label htmlFor="text">Title</label>
          <input type="text" name="text" id="text" value={state===undefined?data?.name:state} onChange={(e)=>{setState(e.target.value)}} required />
        </div>
        <div className="label2">
          <label htmlFor="select">Status</label>
          <select className="select select2" name="select" id="select"value={!state2?data?.status:state2} onChange={(e)=>setState2(e.target.value)}>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
          </select>
        </div>
        <button className="btn1" type="submit">
          Edit Task
        </button>
      </form>
    </div>
  );
}

export default Form2;
