import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  console.log(`🐞 / Countries / countries`, countries);
  const navigate = useNavigate();

  const handleListItemClick = (code) => () => {
    navigate(code.toLowerCase());
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => setCountries(res));
  }, []);

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li onClick={handleListItemClick(country.cca2)} key={country.cca2}>
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
}
