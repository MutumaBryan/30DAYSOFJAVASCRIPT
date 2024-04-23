// Generating the keyboard code using even listener. 
// My solution

const headerOutput = document.querySelector('#signKeyPressed');
const headerCode = document.querySelector('#outputCode');

// Centering elements on the page
headerOutput.style.textAlign = 'center';
headerCode.style.textAlign = 'center';

// Styling individual elements
headerCode.style.color = 'green'; // Key code color

document.body.addEventListener('keydown', (e) =>{
  let keyPressed = e.key;
  let keyCode = e.keyCode || e.which;
  headerOutput.textContent = `You pressed `;
  const keySpan = document.createElement('span');
  keySpan.textContent = keyPressed;
  keySpan.style.color = 'green'; // Set key pressed text color to green
  headerOutput.appendChild(keySpan);

  headerCode.textContent = keyCode;
})