import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./prognoza.css";

const DANI = ['Ponedeljak', 'Utorak', 'Sreda', 'Cetvrtak', 'Petak', 'Subota', 'Nedelja'];

const Prognoza = ({ data }) => {
  const danUNedelji = new Date().getDay();
  const prognozaDani = DANI.slice(danUNedelji, DANI.length).concat(DANI.slice(0, danUNedelji));
  
  return (
    <>
      <label className="title">Dnevna prognoza</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  <label className="day">{prognozaDani[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pritisak:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Vlaznost:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Oblaci:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Brzina vetra:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Nivo mora:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Osecaj:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Prognoza;