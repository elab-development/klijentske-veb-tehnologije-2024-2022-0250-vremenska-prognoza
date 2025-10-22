import "./trenutno-vreme.css"

const TrenutnoVreme= () => {
    return (
        <div className="vreme">
            <div className="top">
                <div>
                    <p className="grad">Belgrade</p>
                    <p className="vreme-opis">Sunny</p>
                </div>
                <img alt="vreme" className="vreme-icon" src="icons/01d.png"/>
            </div>
            <div className="donji">
                <p className="temperatura">18 °C</p>
                <div className="detalji">
                   <div className="parametri-red">
                        <span className="parametri">Detalji</span>
                    </div>
                    <div className="parametri-red">
                        <span className="parametri">Osecaj</span>
                        <span className="parametri-vrednost">22 °C</span>
                    </div>
                    <div className="parametri-red">
                        <span className="parametri">Vetar</span>
                        <span className="parametri-vrednost">2 m/s</span>
                    </div>
                    <div className="parametri-red">
                        <span className="parametri">Vlaznost</span>
                        <span className="parametri-vrednost">15%</span>
                    </div>
                    <div className="parametri-red">
                        <span className="parametri">Pritisak</span>
                        <span className="parametri-vrednost">15 hPa</span>
                    </div>
                </div> 
            </div>
        </div>
    );
}
export default TrenutnoVreme;