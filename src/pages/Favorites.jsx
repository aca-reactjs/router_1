import { Navigate, useLocation } from "react-router-dom";
import { favorites } from "./Country";

const passCode = "1234";

export default function Favorites() {
  const location = useLocation();
  console.log(`🐞 / Favorites / location`, location);

  return location.state.code === passCode ? (
    <div>{localStorage.getItem(favorites)}</div>
  ) : (
    <Navigate to={"/"} />
  );
}
