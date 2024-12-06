import { useContext } from "react";
import "./style.css";
import { AppContext } from "../../../App";
function Button({text,className,type="button"}) {
  const {setToggle} = useContext(AppContext);
  return (
    <button className={className} type={type} onClick={()=>{setToggle(true)}}>{text}</button>
  )
}

export default Button