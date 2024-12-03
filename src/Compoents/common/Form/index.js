import { useDispatch, useSelector } from "react-redux";
import Select1 from "../selectComponent";
import "./style.css";
import { addTask} from "../../../store";
function Form({ setToggle }) {
  const dispatch = useDispatch();
  const onSubmit = function (e) {
    e.preventDefault();
    setToggle(false);
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes();
    const date1 =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    dispatch(
      addTask({
        name: e.target.text.value,
        status: e.target.select.value,
        time: time,
        date: date1,
      })
    );
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Add Task</h2>
        <div className="label1">
          <label htmlFor="text">Title</label>
          <input type="text" name="text" id="text" required />
        </div>
        <div className="label2">
          <label htmlFor="select">Status</label>
          <Select1 options={["incomplete", "complete"]} name="select select2" />
        </div>
        <button className="btn1" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Form;
