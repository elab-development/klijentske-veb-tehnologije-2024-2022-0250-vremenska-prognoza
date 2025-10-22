import { useEffect, useState } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import './App.css';
import Search from './components/Search/search';
import TrenutnoVreme from './components/trenutno-vreme/trenutno-vreme';
import Prognoza from './components/prognoza/prognoza.js';
import Mapa from './components/mapa/Mapa.js';

function App() {

  const [trenutnoVreme, setTrenutnoVreme] = useState(null);
  const [prognoza, setPrognoza] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // Ako je null (npr. kliknuto "Obriši"), samo očisti stanje i prekini
    if (!searchData) {
      setTrenutnoVreme(null);
      setPrognoza(null);
      return;
    }

    const [lat, lon] = searchData.value.split(" ");

    const trenutnoVremeFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const prognozaFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([trenutnoVremeFetch, prognozaFetch])
      .then(async (response) => {
        const vremeResponse = await response[0].json();
        const prognozaResponse = await response[1].json();

        setTrenutnoVreme({ city: searchData.label, ...vremeResponse });
        setPrognoza({ city: searchData.label, ...prognozaResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(trenutnoVreme);
  console.log(prognoza);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {trenutnoVreme && <TrenutnoVreme data={trenutnoVreme} />}
      {trenutnoVreme && (
        <Mapa
          lat={trenutnoVreme.coord.lat}
          lon={trenutnoVreme.coord.lon}
          city={trenutnoVreme.city}
          temp={trenutnoVreme.main.temp}
        />
      )}
      {prognoza && <Prognoza data={prognoza} />}
    </div>
  );
}

export default App;
