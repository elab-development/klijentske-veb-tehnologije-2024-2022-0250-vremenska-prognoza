import { useState, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  // 🔹 Učitavanje poslednje pretrage samo jednom
  useEffect(() => {
    const savedSearch = localStorage.getItem("lastSearch");
    if (savedSearch) {
      try {
        const parsed = JSON.parse(savedSearch);
        setSearch(parsed);
        // Pozovi fetch samo jednom nakon mount-a
        setTimeout(() => onSearchChange(parsed), 300);
      } catch (err) {
        console.error("Greška pri učitavanju poslednje pretrage:", err);
      }
    }
    // ⚠️ nema onSearchChange u zavisnostima!
    // time sprečavamo beskonačno izvršavanje
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 🔹 Učitavanje gradova iz API-ja
  const loadOptions = async (inputValue) => {
    if (!inputValue) return { options: [] };

    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.json();

      const options = Array.isArray(result.data)
        ? result.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }))
        : [];

      return { options };
    } catch (err) {
      console.error("Greška pri učitavanju gradova:", err);
      return { options: [] };
    }
  };

  // 🔹 Kada korisnik izabere grad
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
    localStorage.setItem("lastSearch", JSON.stringify(searchData));
  };

  return (
    <AsyncPaginate
      placeholder="Pretražite grad..."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
