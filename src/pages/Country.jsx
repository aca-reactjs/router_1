import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Country() {
  const [country, setCountry] = useState();
  console.log(`🐞 / Country / country`, country);
  const params = useParams();

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

  return country ? (
    <div>
      <h3>name: {country.name.common}</h3>
      <p>population: {country.population}</p>
      <p>capital city: {country.capital[0]}</p>
      <img src={country.flags.svg} alt="flag" width={500} height={500} />
    </div>
  ) : null;
}
