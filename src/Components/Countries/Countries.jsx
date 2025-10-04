import { useEffect, useState } from "react";
import Country from "../Country/Country"; // ✅ Import Country component

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h3>All countries: {countries.length}</h3>
      {countries.map(country => (
        <Country key={country.id} country={country} /> // ✅ pass prop
      ))}
    </div>
  );
};

export default Countries;
