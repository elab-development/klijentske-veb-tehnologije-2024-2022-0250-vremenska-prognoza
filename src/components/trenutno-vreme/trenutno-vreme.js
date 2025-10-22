import "./trenutno-vreme.css"

const TrenutnoVreme= ({data}) => {
    return (
        <div className="vreme">
            <div className="top">
                <div>
                    <p className="grad">{data.city}</p>
                    <p className="vreme-opis">{data.weather[0].description}</p>
                </div>
                <img alt="vreme" className="vreme-icon" src={`icons/${data.weather[0].icon}.png`}/>
            </div>
            <div className="donji">
                <p className="temperatura">{Math.round(data.main.temp)}°C</p>
                <div className="detalji">
                   <div className="parametri-red">
                        <span className="parametri">Opis</span>
                    </div>
                    <div className="parametri-red">
                        <span className="parametri">Osecaj</span>
                        <span className="parametri-vrednost">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parametri-red">
                        <span className="parametri">Vetar</span>
                        <span className="parametri-vrednost">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parametri-red">
                        <span className="parametri">Vlaznost</span>
                        <span className="parametri-vrednost">{data.main.humidity}%</span>
                    </div>
                    <div className="parametri-red">
                        <span className="parametri">Pritisak</span>
                        <span className="parametri-vrednost">{data.main.pressure} hPa</span>
                    </div>
                </div> 
            </div>
        </div>
    );
}
export default TrenutnoVreme;