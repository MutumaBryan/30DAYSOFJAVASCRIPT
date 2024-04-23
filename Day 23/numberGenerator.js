// Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.
// My solution
document.body.style.fontFamily = 'Montserrat';
document.body.style.textAlign = 'center';

// assign the elements to variables
const button = document.querySelector('button');
const inputNumber = document.querySelector('#genNumber')
const pWarn = document.querySelector('p');
const wrapper = document.querySelector('#inputWrapper');

wrapper.style.position = 'relative';
wrapper.style.textAlign = 'center';
button.style.backgroundColor = 'lightgreen';
button.style.color = 'white';
button.style.border = '0';
button.style.borderRadius = '3px';
button.style.alignContent = 'center';
button.style.padding = '6px';
inputNumber.style.border = '1px solid lightgreen'
inputNumber.style.borderRadius = '3px'
inputNumber.style.margin = '1px';
inputNumber.style.padding = '5px';
inputNumber.style.width = '300px';
pWarn.style.left = '0';
pWarn.style.fontSize = '14px';


// warn user field must have an input
// inputNumber.addEventListener('blur', (e)=> {
//   pWarn.textContent = 'Field is required to have a number';
//   pWarn.style.color = 'red';
// });

// function to check whether a number is prime
const isPrime = (prime) => {
  for (let i = 2; i <= Math.sqrt(prime); i++) {
    if(prime % i === 0) return false;
  }
  return true;
}

const tableNumbers = document.querySelector('table');
let tRow;
let tData;
// function that generates table of numbers
const numGenerator = (count) => {
  tableNumbers.innerHTML = '';
  tableNumbers.style.margin = 'auto';

  let number = 0;
  let rows;
  let columns;

  // regulate the number of rows to columns
  if(count < 10) {
    rows = 1;
    columns = count;
  }
  else{
    rows = Math.ceil(count/10);
    columns = 10;
  }

  // iterate through appending the data to the rows
  for (let row = 0; row < rows; row++) {
    tRow = document.createElement('tr');
    for (let column = 0; column < columns; column++) {
      tData = document.createElement('td');
      tData.textContent = number;

      // check whether the number is prime, even or odd and set background color accordingly
      if (number % 2 === 0) tData.style.backgroundColor = 'green';
      else if(isPrime(number)) tData.style.backgroundColor = 'red';
      else tData.style.backgroundColor = 'yellow';

      tData.style.margin = '1px';
      tData.style.borderRadius = '3px';
      tData.style.padding = '5px';

      tRow.appendChild(tData);
      
      // stop loop when number is reached
      if (count === number) break;
      number = number + 1;
    }
    tableNumbers.appendChild(tRow);
  }

  // Clear input and warning after generating table
  inputNumber.value = '';
  pWarn.textContent = '';
}

button.addEventListener('click', () => {
  let input = inputNumber.value;
  if (input.match(/^[0-9]+$/)){
    numGenerator(parseInt(input, 10));
  } else {
    pWarn.textContent = 'Please enter a number';
    pWarn.style.color = 'red';
  }
})