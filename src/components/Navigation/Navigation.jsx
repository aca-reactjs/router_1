import styles from "./Navigation.module.css";
import Link from "../Link/Link";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [code, setCode] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    setIsFormVisible(true);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    navigate("/favorites", { state: { code } });
  };

  return (
    <nav className={styles.mainNavigation}>
      <Link to="/">home page</Link>
      <Link to="countries">countries</Link>
      <div onClick={handleFavoriteClick}>favorites</div>

      {isFormVisible ? (
        <form onSubmit={formSubmit}>
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </form>
      ) : null}
    </nav>
  );
}
