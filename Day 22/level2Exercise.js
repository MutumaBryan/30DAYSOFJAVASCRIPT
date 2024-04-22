import { countries } from "./countries.js";

// Use the countries array to display all the countries.See the design
document.body.style.fontFamily = 'montserrat';
document.body.style.textAlign = 'center';

const divWrap = document.createElement('div');
const h1Element = document.createElement('h1');
const h2Element = document.createElement('h2');
const h3Element = document.createElement('h3');
const h4Element = document.createElement('h4');

document.body.appendChild(divWrap);
divWrap.appendChild(h1Element);
divWrap.appendChild(h2Element);
divWrap.appendChild(h3Element);
divWrap.appendChild(h4Element);

divWrap.setAttribute('id','wrapper');
h1Element.textContent = 'WORLD COUNTRIES LIST';
h2Element.textContent = `Total Number of Countries:${countries.length}`;
h3Element.textContent = '30DaysOfJavaScript:DOM Day2';
h4Element.textContent = 'Author:Asabeneh Yetayeh';

h1Element.style.letterSpacing = '5px';

const tableCountries = document.createElement('table');
let countriesRow;
let countriesData;
let count = 0;
for (let row = 0; row < 40; row++) {
    countriesRow = document.createElement('tr');
    for (let column = 0; column < 5; column++) {
        countriesData = document.createElement('td');
        countriesData.textContent = countries[count];
        console.log(countriesData);

        countriesData.style.padding = '25px';
        countriesData.style.width = '100px';
        countriesData.style.height = '100px';
        countriesData.style.textAlign = 'center';
        countriesData.style.borderRadius = '4px';
        countriesData.style.border = '2px solid #ccc';
        
        countriesRow.appendChild(countriesData);
        count++;
    }
    
    tableCountries.appendChild(countriesRow);
}

tableCountries.style.marginLeft = 'auto';
tableCountries.style.marginRight = 'auto';
tableCountries.style.borderSpacing = '5px';

divWrap.appendChild(tableCountries);