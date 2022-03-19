import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const favorites = "favoriteList";

export default function Country() {
  const [country, setCountry] = useState();

  const [isAdded, setIsAdd] = useState();

  const params = useParams();

  function isCountryAdded() {
    const list = JSON.parse(localStorage.getItem(favorites));
    return !!list?.find((item) => item === country.cca2);
  }

  useEffect(() => {
    if (country) {
      setIsAdd(isCountryAdded());
    }
  }, [country]);

  useEffect(() => {
    if (params.code) {
      fetch(`https://restcountries.com/v3.1/alpha/${params.code}`)
        .then((res) => res.json())
        .then((res) => {
          const currentCountry = res[0];

          setCountry(currentCountry);
        });
    }
  }, [params]);

  const handleFavoriteInputChange = (e) => {
    const list = JSON.parse(localStorage.getItem(favorites)) || [];
    const favorite = country.cca2;

    if (e.target.checked) {
      list.push(favorite);

      localStorage.setItem(favorites, JSON.stringify(list));
    } else {
      const newList = list.filter((item) => item !== favorite);
      localStorage.setItem(favorites, JSON.stringify(newList));
    }

    setIsAdd(e.target.checked);
  };

  return country ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "2rem",
        marginTop: 16,
      }}
    >
      <img src={country.flags.svg} alt="flag" width={200} height={200} />
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <h3>name: {country.name.common}</h3>
        <label
          htmlFor="favorite"
          style={{
            color: isAdded ? "#ead730" : "white",
            textShadow: `1px 1px 1px ${isAdded ? "#ead730" : "black"}`,
            fontSize: "2rem",
          }}
        >
          ★
          <input
            onChange={handleFavoriteInputChange}
            type="checkbox"
            name="favorite"
            id="favorite"
            checked={isAdded}
            hidden
          />
        </label>
      </div>
      <p>population: {country.population}</p>
      <p>capital city: {country.capital[0]}</p>
    </div>
  ) : null;
}
