import "./style.css";
function Button({ text, type, setToggle }) {
  if (type === "submit") {
    return (
      <button className="btn1" type={type}>
        {text}
      </button>
    );
  }
  return (
    <button
      className="btn1"
      type={type}
      onClick={() => {
        setToggle(true);
      }}
    >
      {text}
    </button>
  );
}

export default Button;
