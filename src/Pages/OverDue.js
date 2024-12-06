import React, { useContext } from 'react'
import Header from '../Components/Common/Header';
import Search from '../Components/Common/SearchBar';
import TaskLists from '../Components/Common/TasksBox';
import Form2 from '../Components/Form/Form';
import { AppContext } from '../App';

function OverDue() {
     const { setToggle2, toggle2 } = useContext(AppContext);
     return (
       <div>
         <Header />
         <div className="pendingTasks">
           <Search />
           <TaskLists />
         </div>
         <div
           className="form-container"
           style={{ display: toggle2 ? "flex" : "none" }}
         >
           <div className="close">
             <span
               onClick={() => {
                 setToggle2(false);
               }}
             >
               &times;
             </span>
           </div>
           <Form2 />
         </div>
       </div>
     );
}

export default OverDue;