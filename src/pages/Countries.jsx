import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { CountryList } from "../components";

export default function Countries() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => setCountries(res));
  }, []);

  return !countries ? (
    <div>loading</div>
  ) : countries?.length ? (
    <CountryList countries={countries} />
  ) : null;
}
