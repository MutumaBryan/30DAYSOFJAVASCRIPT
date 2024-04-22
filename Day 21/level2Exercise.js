/**
 * Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
 * Select all paragraphs and loop through each elements. 
     * Give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
 * Set text content, id and class to each paragraph
 */
// ?Q1
const paragraph = document.querySelectorAll('p');
console.log(paragraph);
paragraph.forEach((element) => {
    element.style.color = 'yellow';
    element.style.backgroundColor = 'black';
    element.style.fontSize = '24px';
    element.style.fontFamily = 'Times New Roman';
});

// Q2
paragraph.forEach((element, i) =>{
    i % 2 === 0
    ? element.style.color = 'red'
    : element.style.color = 'green'
});

// Q3
paragraph[0].textContent = 'Hello';
paragraph[0].setAttribute('id','newFirstParagraph');
paragraph[0].setAttribute('class','title');
paragraph[1].textContent = 'This is a Document Object Model exercise';
paragraph[1].setAttribute('id','newSecondParagraph');
paragraph[1].setAttribute('class','title');
paragraph[2].textContent = 'I am changing the content of these paragraphs';
paragraph[2].setAttribute('id','newThirdParagraph');
paragraph[2].setAttribute('class','title');
paragraph[3].innerHTML = 'They say something different now';
paragraph[3].setAttribute('id','newFourthParagraph');
paragraph[3].setAttribute('class','title');
