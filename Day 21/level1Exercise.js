/**
 * Q1: Create an index.html file and put four p elements as above: 
     * Get the first paragraph by using document.querySelector(tagname) and tag name
 * Q2: Get each of the the paragraph using document.querySelector('#id') and by their id
 * Q3: Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
 * Q4: Loop through the nodeList and get the text content of each paragraph
 * Q5: Set a text content to paragraph the fourth paragraph,Fourth Paragraph
 * Q6: Set id and class attribute for all the paragraphs using different attribute setting methods
 */

// Q1 solution
const paragraph = document.querySelector('p');
// console.log(paragraph)

// Q2 Solution
const firstParagraphByID = document.getElementById('1');
const secondParagraphByID = document.getElementById('2');
const thirdParagraphByID = document.getElementById('3');
const fourthParagraphByID = document.getElementById('4');

// console.log(`${firstParagraphByID.textContent}\n ${secondParagraphByID.textContent}\n ${thirdParagraphByID.textContent}\n ${fourthParagraphByID.textContent}`)

// Q3 Solution
const paragraphAll = document.querySelectorAll('p');

// Q4 Solution
paragraphAll.forEach((paragraph) => {
    console.log(paragraph.textContent);
})

// Q5 Solution
paragraphAll[3].textContent = 'Fourth Paragraph';

// Q6 Solution
// Set id and class attributes for paragraphs
paragraphAll[0].id = 'firstParagraph';
paragraphAll[0].className = 'title'; // Using className property for class
paragraphAll[1].id = 'secondParagraph'; // Using id property for id
paragraphAll[1].setAttribute('class', 'subtitle'); // Using setAttribute for class
paragraphAll[2].setAttribute('id', 'thirdParagraph'); // Using setAttribute for id
paragraphAll[2].setAttribute('class', 'content'); // Using setAttribute for class
paragraphAll[3].id = 'fourthParagraph'; // Using id property for id
paragraphAll[3].className = 'content'; // Using className property for class
console.log(paragraphAll);