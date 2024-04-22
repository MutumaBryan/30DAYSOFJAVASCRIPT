// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second

// The date and time background color is changing every second
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red
//Q1
const headingOne = document.querySelector('h1');
const colourArray = ['red', 'brown', 'blue', 'green', 'yellow', 'orange', 'violet'];
let i = 0;

const colorChange = () => {
    const year2020 = '2020';
    const currentText = headingOne.textContent;
    const updatedText = currentText.replace(year2020, `<span style="color: ${colourArray[i]}; font-size: 80px;">${year2020}</span>`);
    headingOne.innerHTML = updatedText;
    i = (i + 1) % colourArray.length;
};
setInterval(colorChange, 1000);

// Q2 My solution
const div = document.querySelector('div');

const newHeader = document.createElement('h3');
const h2Element = document.querySelector('h2');
div.insertBefore(newHeader, h2Element.nextSibling);

const colorTimeBackGroundChange = () => {
  let timeNow = new Date();
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const monthNow = months[timeNow.getMonth()];
    
  let showTime = `${monthNow} ${timeNow.getDate()}, ${timeNow.getFullYear()} ${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`;
  newHeader.style.backgroundColor = colourArray[Math.floor(Math.random() * colourArray.length)];
  newHeader.textContent = showTime;  
}
setInterval(colorTimeBackGroundChange, 1000);

// Q3 My Solution
const divWrapper = document.querySelector('div');
divWrapper.style.maxWidth = 'fit-content';
divWrapper.style.marginLeft = 'auto';
divWrapper.style.marginRight = 'auto';

const lists = document.querySelectorAll('li');
let testCompletion = /done/gi
let testOngoing = /ongoing/gi

lists.forEach((element) =>  {
  element.style.fontFamily = 'montserrat';

  if (testCompletion.test(element.textContent)) {
    element.style.backgroundColor = 'green';
  } else if (testOngoing.test(element.textContent)) {
    element.style.backgroundColor = 'yellow';
  } else {
    element.style.backgroundColor = 'red';
  }

  element.style.paddingLeft = '10px';
  element.style.paddingTop = '10px';
  element.style.paddingBottom = '10px';
  element.style.marginTop = '1px';
});

const h1Element = document.querySelector('h1');
h1Element.style.fontFamily = 'montserrat';
h1Element.style.maxWidth = 'fit-content';
h1Element.style.marginLeft = 'auto';
h1Element.style.marginRight = 'auto';

const h2Tag = document.querySelector('h2');
h2Tag.style.fontFamily = 'montserrat';
h2Tag.style.maxWidth = 'fit-content';
h2Tag.style.marginLeft = 'auto';
h2Tag.style.marginRight = 'auto';
h2Tag.style.textDecoration = 'underline';

const h3Element = document.querySelector('h3');
h3Element.style.fontFamily = 'montserrat';
h3Element.style.maxWidth = 'fit-content';
h3Element.style.marginLeft = 'auto';
h3Element.style.marginRight = 'auto';
h3Element.style.padding = '10px';

const ul = document.querySelector('ul');
ul.style.listStyleType = 'none';






