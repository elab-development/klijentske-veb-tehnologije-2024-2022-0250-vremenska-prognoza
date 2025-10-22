import "./trenutno-vreme.css"

const TrenutnoVreme= () => {
    return (
        <div className="vreme">
            <div className="top">
                <p className="grad">Belgrade</p>
                <p className="vreme-opis">Sunny</p>
            </div>
            <img alt="vreme" className="vreme-icon" src="icons/01d.png"/>
        </div>
    );
}
export default TrenutnoVreme;