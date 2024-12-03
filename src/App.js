import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Compoents/Dashboard";
import "./index.css";
const App = function () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
