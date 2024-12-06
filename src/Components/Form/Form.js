import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useContext, useEffect, useRef, useState } from "react";
import { editTask } from "../../store";
import { AppContext } from "../../App";
let id = 10001;
function Form2() {
  const { setToggle2 } = useContext(AppContext);
  const data = useSelector((state) => state.a.selectedData);
  const [state, setState] = useState({
    title: "",
    date: "",
    description: "",
    status: "",
  });
  useEffect(() => {
    if (data) {
      setState({
        title: data.title || "",
        date: data.date || "",
        description: data.desc || "",
        status: data.status || "",
      });
    }
  }, [data]);
  const dispatch = useDispatch();
  const form = useRef();
  if (form.current) {
    form.current.reset();
  }
  const onSubmit = function (e) {
    e.preventDefault();
    setToggle2(false);
    dispatch(
      editTask({
        id: data.id,
        data: {
          id:data.id,
          title: e.target.title.value,
          date: e.target.date.value,
          desc: e.target.description.value,
          status: e.target.status.value,
        },
      })
    );
  };
  const onTitle = function (e) {
    state.title = e.target.value;
    setState({ ...state });
  };
  const onDate = function (e) {
    state.date = e.target.value;
    setState({ ...state });
  };
  const onTextArea = function (e) {
    state.description = e.target.value;
    setState({ ...state });
  };
  const changeStatus = function (e) {
    state.status = e.target.value;
    setState({ ...state });
  };
  return (
    <form onSubmit={onSubmit} ref={form}>
      <h1>Edit Task</h1>
      <div>
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          name="title"
          id="title"
          value={state.title}
          onChange={onTitle}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Target Date :</label>
        <input
          type="date"
          name="date"
          id="date"
          value={state.date}
          onChange={onDate}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description :</label>
        <textarea
          value={state.description}
          onChange={onTextArea}
          name="description"
          id="description"
          rows="5"
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="status">Task Status :</label>
        <select
          name="status"
          id="status"
          value={state.status}
          onChange={changeStatus}
          required
        >
          <option value="pending">InComplete</option>
          <option value="complete">Complete</option>
        </select>
      </div>
      <button type="submit" className="btn btn2">
        Edit Task
      </button>
    </form>
  );
}

export default Form2;
