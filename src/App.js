import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Compoents/Dashboard";
import "./index.css";
const App = function () {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
export default App;
