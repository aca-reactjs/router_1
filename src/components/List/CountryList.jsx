import { useNavigate } from "react-router-dom";

export function CountryList({ countries }) {
  const navigate = useNavigate();

  const handleListItemClick = (code) => () => {
    navigate(code.toLowerCase());
  };

  return (
    <ul
      style={{
        margin: "1em 0 0 1em",
        padding: 0,
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      {countries.map((country, idx) => (
        <li
          style={{
            listStyle: "none",
            marginBottom: "1rem",
            color: `hsl(${idx}, 50%, 50%)`,
            fontSize: "1.2em",
          }}
          onClick={handleListItemClick(country.cca2)}
          key={country.cca2}
        >
          {country.name.common}
        </li>
      ))}
    </ul>
  );
}
