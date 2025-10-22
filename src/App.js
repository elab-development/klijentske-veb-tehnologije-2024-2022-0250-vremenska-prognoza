import './App.css';
import Search from './components/Search/search';
import TrenutnoVreme from './components/trenutno-vreme/trenutno-vreme';

function App() {
  const handleOnSearchChange= (searchData) =>{
    console.log(searchData);
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <TrenutnoVreme />
    </div>
  );
}

export default App;
