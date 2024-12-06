import { useDispatch } from "react-redux";
import Button from "../Common/Button";
import "./style.css";
import { addTask } from "../../store";
import { useContext, useRef } from "react";
import { AppContext } from "../../App";
let id = 10001;
function Form() {
  const {setToggle} = useContext(AppContext);
  const dispatch = useDispatch();
  const form = useRef();
  if(form.current){
    form.current.reset();
  }
  const onSubmit = function (e) {
    e.preventDefault();
    dispatch(
      addTask({
        title: e.target.title.value,
        date: e.target.date.value,
        desc: e.target.description.value,
        status: e.target.status.value,
        id:id,
      })
    );
    setToggle(false);
    id++;
  };
  return (
    <form onSubmit={onSubmit} ref={form}>
      <h1>ADD TASK</h1>
      <div>
        <label htmlFor="title">Title :</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div>
        <label htmlFor="date">Target Date :</label>
        <input type="date" name="date" id="date" required />
      </div>
      <div>
        <label htmlFor="description">Description :</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="status">Task Status :</label>
        <select name="status" id="status" required>
          <option value="pending">InComplete</option>
          <option value="complete">Complete</option>
        </select>
      </div>
      <button type="submit" className="btn btn2">
        ADD TASK
      </button>
    </form>
  );
}

export default Form;
