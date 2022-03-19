import { Link, Outlet, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:code" element={<Country />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
