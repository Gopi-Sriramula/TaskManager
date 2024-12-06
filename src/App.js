import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Dashboard from "./Pages/dashboard";
import PendingTasks from "./Pages/PendingTasks";
import CompleteTasks from "./Pages/completeTasks";
import { createContext, useState } from "react";
export const AppContext = createContext();
const App = function () {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [onChange,setonChange] = useState("");
  return (
    <div>
      <AppContext.Provider value={{ toggle, toggle2, setToggle, setToggle2,onChange,setonChange }}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pending" element={<PendingTasks />} />
            <Route path="/complete" element={<CompleteTasks />} />
          </Routes>
        </HashRouter>
      </AppContext.Provider>
    </div>
  );
};
export default App;
