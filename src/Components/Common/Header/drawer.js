import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
export default function TemporaryDrawer() {
  const [state, setState] = useState(false);

  return (
    <div>
      {["left"].map((anchor) => (
        <>
          <Button
            onClick={() => {
              setState(true);
            }}
          >
            <span className="material-icons link">menu</span>
          </Button>
          <Drawer
            anchor={anchor}
            open={state}
            onClose={() => {
              setState(false);
            }}
          >
            <div className="mobile-drawer">
              <Link className="link" to="/">
                Dashboard
              </Link>
              <Link className="link" to="/pending">
                PendingTasks
              </Link>
              <Link className="link" to="/complete">
                CompletedTasks
              </Link>
              <Link className="link" to="/overdue">
                OverdueTasks
              </Link>
            </div>
          </Drawer>
        </>
      ))}
    </div>
  );
}
