import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">home page</Link>{" "}
        <Link to="users">users</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
