import { useContext, useEffect } from "react";
import "./style.css";
import { AppContext } from "../../../App";
import { useLocation } from "react-router-dom";
function Search() {
  const {pathname} = useLocation();
  const {onChange,setonChange} = useContext(AppContext);
  useEffect(()=>{
    setonChange("");
  },[pathname])
  return (
    <div className="search">
      <span className="material-icons search-icon">search</span>
      <input type="text" placeholder="Search" className="input" value={onChange} onChange={(e)=>{setonChange(e.target.value)}}/>
    </div>
  );
}

export default Search;
