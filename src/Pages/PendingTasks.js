import React, { useContext } from "react";
import Header from "../Components/Common/Header";
import TaskLists from "../Components/Common/TasksBox";
import { AppContext } from "../App";
import Form2 from "../Components/Form/Form";
import Search from "../Components/Common/SearchBar";
function PendingTasks() {
  const {setToggle2,toggle2} = useContext(AppContext);
  return (
    <div>
      <Header />
      <div className="pendingTasks">
        <Search/>
        <TaskLists />
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

export default PendingTasks;
