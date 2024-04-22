// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red
document.body.style.fontFamily = 'montserrat';
document.body.style.textAlign = 'center';

const divWrap = document.createElement('div');
const h1Element = document.createElement('h1');
const h2Element = document.createElement('h2');
const h4Element = document.createElement('h4');

document.body.appendChild(divWrap);
divWrap.appendChild(h1Element);
divWrap.appendChild(h2Element);
divWrap.appendChild(h4Element);

divWrap.setAttribute('id','wrapper');
h1Element.textContent = 'Number Generator';
h2Element.textContent = '30DaysOfJavaScript:DOM Day2';
h4Element.textContent = 'Author:Asabeneh Yetayeh';

h2Element.style.textDecoration = 'underline';
h4Element.style.textDecoration = 'underline';

const isPrime = (number) => {
    for (let i = 2; i < Math.sqrt(number); i++) {
        if(number % i === 0) return false;        
    }
    return true;
}

let count = 0;
const tableNumbers = document.createElement('table');
let tableData
let tableRowNum
for (let row = 0; row < 17; row++) {
    tableRowNum = document.createElement('tr');
    for(let column = 0; column < 6; column++)
    {
        tableData = document.createElement('td');
        tableData.textContent = count;
        tableData.style.textAlign = 'center';
        tableData.style.padding = '10px';
        tableData.style.margin = '1px';

        if(count % 2 === 0) tableData.style.backgroundColor = 'green';
        else if(isPrime(count)) tableData.style.backgroundColor = 'red';
        else tableData.style.backgroundColor = 'yellow';
        
        tableRowNum.appendChild(tableData);
        count ++;
    }
    tableNumbers.appendChild(tableRowNum);
}

divWrap.appendChild(tableNumbers);
tableNumbers.style.marginLeft = 'auto';
tableNumbers.style.marginRight = 'auto';

