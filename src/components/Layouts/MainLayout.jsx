import { Link, Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function MainLayout() {
  return (
    <div>
      <Navigation />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
