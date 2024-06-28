import { countries } from "./04-Iteration-Pipeline-Data-Countries/countries.js";


const totalArea = document.querySelector("#totalArea");


const getTotalArea = () => {
    const totalArea = countries.reduce((total, country) => total + country.area, 0);
    return totalArea;

}

totalArea.innerHTML = getTotalArea().toFixed(2);