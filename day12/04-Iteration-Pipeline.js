import { countries } from "./04-Iteration-Pipeline-Data-Countries/countries.js"; // Assuming your data is in a separate file named data.js

const ddlCountries = document.querySelector("#ddlCountries");
const tblCountry = document.querySelector("#countriesTable");

const loadData = () => {
    let options = `<option value="">Select Your Country</option>`; // Disabled option for initial selection

    for (let country of countries) {
        options += `<option value="${country.ccn3}">${country.name.common}</option>`;
    }

    ddlCountries.innerHTML = options;
};

loadData();

const getCountry = (countryCode) => {
    const filteredCountry = countries.filter((country) => country.ccn3 === countryCode);
    return filteredCountry.length > 0 ? filteredCountry[0] : null; // Return null for non-existent countries
};

const fillTable = (country) => {
    if (country) {
        const capitalCity = country.capital.join("-");
        const currencies = Object.keys(country.currencies).join(" - "); // Join currency codes
        const languages = Object.values(country.languages).join(" - "); // Join languages
        const area = country.area;
        const mapLink = `<a href="https://www.google.com/maps?q=${country.latlng.toString()}" target="_blank">Google Maps</a>`;

        tblCountry.querySelector("tr:nth-child(1) td").innerHTML = capitalCity;
        tblCountry.querySelector("tr:nth-child(2) td").innerHTML = currencies;
        tblCountry.querySelector("tr:nth-child(3) td").innerHTML = languages;
        tblCountry.querySelector("tr:nth-child(4) td").innerHTML = area;
        tblCountry.querySelector("tr:nth-child(5) td").innerHTML = mapLink;
    } else {
        // Optional: Clear table or display a message for non-existent countries
    }
};

ddlCountries.onchange = (event) => {
    const countryCode = event.target.value;
    const country = getCountry(countryCode);
    fillTable(country);
};
