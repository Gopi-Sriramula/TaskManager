import { Link } from 'react-router-dom';
import "./style.css";
function Header() {
  return (
    <div className='header-container'>
     <h1 className='header-head'>Task Manager.</h1>
     <div className='header-links'>
          <Link className='link' to="/">Dashboard</Link>
          <Link className='link' to="/pending">PendingTasks</Link>
          <Link className='link' to="/complete">CompletedTasks</Link>
          <Link className='link' to="/overdue">OverdueTasks</Link>
     </div>
    </div>
  )
}

export default Header