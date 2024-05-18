import Card from './Card';
import Data from '../Data';
import Filter from './Filter';

import './Middle_Section.css';


import { useState } from "react";



function MiddleSection(){
    const [item, setItem] = useState(Data);

    const cardItems = [...new Set(Data.map((Val) => Val.type))];
    
    const filterItem = (curCat) => {
        let newItem = Data;
        if (curCat !== "all") {
            newItem = Data.filter((newVal) => {
                return newVal.type === curCat;
            });
        } else {
            newItem = Data.filter((newVal) => {
                return true;
            });
        }

        const newButton = document.getElementById('SortByNew');

        if (newButton && newButton.classList.contains("Selected")) {
            setItem(newItem.sort((a, b) => new Date(b.updated_date) - new Date(a.updated_date)));
            
        } else if (newButton && !newButton.classList.contains("Selected")) {
            setItem(newItem.sort((a, b) => new Date(a.updated_date) - new Date(b.updated_date)));
            
        } else {
            setItem(newItem.sort((a, b) => new Date(b.updated_date) - new Date(a.updated_date)));
            
        }
    }

    const sortItem = (order, curCat) => {
        const newButton = document.getElementById('SortByNew');
        const oldButton = document.getElementById('SortByOld');
        
        if (newButton && oldButton){
            if (order === "new") {
                if (!newButton.classList.contains("Selected")){
                    newButton.classList.add("Selected");
                }
                if (oldButton.classList.contains("Selected")){
                    oldButton.classList.remove("Selected");
                }
                
            } else {
                if (newButton.classList.contains("Selected")){
                    newButton.classList.remove("Selected");
                }
                if (!oldButton.classList.contains("Selected")){
                    oldButton.classList.add("Selected");
                }
                
            }
            filterItem(curCat);
        }
    }

    return (
        <div className="middleContainer">
            <Filter filterItem={filterItem} sortItem={sortItem}  setItem={setItem} cardItems={cardItems}/>
            <Card item={item} />
        </div>
    )
}

export default MiddleSection;