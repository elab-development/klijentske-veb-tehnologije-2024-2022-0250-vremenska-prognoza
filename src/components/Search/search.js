import { useState,useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    useEffect(() => {
        const savedSearch = localStorage.getItem("lastSearch");
        if (savedSearch) {
            try {
                const parsed = JSON.parse(savedSearch);
                setSearch(parsed);
                onSearchChange(parsed); // automatski poziva fetch podataka
            } catch (err) {
                console.error("Greška pri učitavanju poslednje pretrage:", err);
            }
        }
    }, [onSearchChange]);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
        localStorage.setItem("lastSearch", JSON.stringify(searchData));
    }
    return (
        <AsyncPaginate
            placeholder="Pretrazite grad"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}
export default Search;