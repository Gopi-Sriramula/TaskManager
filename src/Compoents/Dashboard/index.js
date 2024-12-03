import React, { useState } from "react";
import "./style.css";
import Button from "../common/button";
import Select1 from "../common/selectComponent";
import AddedTask from "../Task";
import Form from "../common/Form";
import Form2 from "../common/Form/Form2";
function Dashboard() {
  const [toggle,setToggle] = useState(false);
  const [toggle2,setToggle2] = useState(false);
  const [state,setState] = useState("");
  return (
    <div className="dashboard-container">
      <div className="dashboard-div1">
        <h1 className="head">Task Manager</h1>
      </div>
      <div className="search">
        <span className="material-icons">search</span>
        <input type="text" placeholder="Search" value={state} onChange={(e)=>{setState(e.target.value)}}/>
      </div>
      <div className="container2">
        <div className="dashboard-div2">
          <Button text={"Add Task"} type={"button"} setToggle={setToggle}/>
          <Select1
            options={["all", "incomplete", "complete"]}
            name={"select"}
            onChange={()=>{console.log(1)}}
          />
        </div>
        <div className="dashboard-div3">
          <AddedTask setToggle2={setToggle2} state={state}/>
        </div>
      </div>
      <div className="toggle" style={{display:toggle?"flex":"none"}}>
        <div className="toggle-div">
          <span className="close" onClick={()=>setToggle(false)}>&times;</span>
          <Form setToggle={setToggle}/>
        </div>
      </div>
      <div className="toggle" style={{display:toggle2?"flex":"none"}}>
        <div className="toggle-div">
          <span className="close" onClick={()=>setToggle2(false)}>&times;</span>
          <Form2 setToggle2={setToggle2}/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
