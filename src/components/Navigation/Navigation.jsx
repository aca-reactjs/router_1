import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div>
        <Link to="/">home page</Link>
      </div>
      <div>
        <Link to="countries">countries</Link>
      </div>
    </nav>
  );
}
