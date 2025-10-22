import React from "react";
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";

const DANI=['Ponedeljak', 'Utorak', 'Sreda', 'Cetvrtak', 'Petak', 'Subota', 'Nedlja'];

const Prognoza =({data}) => {
const danUNedelji= new Date().getDay();
const prognozaDani = DANI.slice(danUNedelji,DANI.length).concat(DANI.slice(0,danUNedelji));

    return(
     <>
        <label className="title">Dnevna</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item,idx)=>
                (<AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="dnevni-item">
                                <img alt="vreme" className="icon-mala" src={`icons/${data.item[0].icon}.png`}/>
                                <label className="dan">{prognozaDani[idx]}</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel></AccordionItemPanel>
                </AccordionItem>
                )
            )}
            
        </Accordion>
    </>
    );
};
export default Prognoza;