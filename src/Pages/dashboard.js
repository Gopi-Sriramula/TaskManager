import React, { createContext, useContext, useState } from "react";
import Header from "../Components/Common/Header";
import Button from "../Components/Common/Button";
import TaskLists from "../Components/Common/TasksBox";
import Form from "../Components/Form";
import Form2 from "../Components/Form/Form";
import { AppContext } from "../App";
import Search from "../Components/Common/SearchBar";
function Dashboard() {
  const {toggle,setToggle,toggle2,setToggle2} = useContext(AppContext)
  return (
    <div>
        <Header />
        <Button text="Add Task" className={"btn"} />
        <Search/>
        <TaskLists/>
        <div
          className="form-container"
          style={{ display: toggle ? "flex" : "none" }}
        >
          <div className="close">
            <span onClick={()=>{setToggle(false)}}>&times;</span>
          </div>
          <Form />
        </div>
        <div
          className="form-container"
          style={{ display: toggle2 ? "flex" : "none" }}
        >
          <div className="close">
            <span onClick={()=>{setToggle2(false)}}>&times;</span>
          </div>
          <Form2/>
        </div>
    </div>
  );
}

export default Dashboard;
