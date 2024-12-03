import { useDispatch } from "react-redux";
import "./style.css";
import { selectedData } from "../../../store";
function Select1({options,name}) {
     const dispatch = useDispatch();
     const onChange = function(e){
          dispatch(selectedData(e.target.value))
     }
  return (
     <select className={name} name="select" id="select" onChange={onChange}>
          {options.map((item)=>{
               return <option value={item} key={item}>{item}</option>
          })}
     </select>
  )
}

export default Select1;