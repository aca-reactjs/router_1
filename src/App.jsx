import { Link, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts";
import HomePage from "./pages/HomePage";
import Users from "./pages/Users";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}
