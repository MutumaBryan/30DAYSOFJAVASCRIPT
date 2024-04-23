
// Check the requirement of this project from both images(jpg and gif). 
// All the data and CSS has been implemented using JavaScript only. 
// The data is found on starter folder project_3. 
// The drop down button has been created using details HTML element.
import { asabenehChallenges2020 } from "./challenges.js";

document.body.style.fontFamily = 'montserrat';
document.body.style.textAlign = 'center';

const divWrap = document.createElement('div');
const h1Element = document.createElement('h1');
const h2Element = document.createElement('h2');
const h3Element = document.createElement('h3');


document.body.appendChild(divWrap);
divWrap.appendChild(h1Element);
divWrap.appendChild(h2Element);
divWrap.appendChild(h3Element);

h1Element.innerHTML = 'Asabeneh Yetayeh Challenges in 2020';
h2Element.innerHTML = '30DaysOfJavaScript Challenge.';

const colourArray = ['red', 'brown', 'blue', 'green', 'yellow', 'orange', 'violet'];
let c = 0;
const colorTimeBackGroundChange = () => {
    let timeNow = new Date();
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const monthNow = months[timeNow.getMonth()];
      
    let showTime = `${monthNow} ${timeNow.getDate()}, ${timeNow.getFullYear()} ${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`;
    h3Element.style.backgroundColor = colourArray[c];
    c = (c + 1) % colourArray.length;
    h3Element.textContent = showTime;  
}
setInterval(colorTimeBackGroundChange, 1000);

let i = 0;
const colorTextChanger = () => {
  let oldText = h1Element.innerHTML;
  let newText = oldText.replace('2020', `<span style='color:${colourArray[i]}; font-size: 80px'>2020</span>`);
  h1Element.innerHTML = newText;
  i = (i + 1) % colourArray.length;
}
setInterval(colorTextChanger, 1000);

h2Element.style.textDecoration = 'underline';
h3Element.style.padding = '10px';
h3Element.style.maxWidth = 'fit-content';
h3Element.style.marginLeft = 'auto';
h3Element.style.marginRight = 'auto';

const listBag = document.createElement('ul');
let lists;
let topicsList;
let topic;
let titleURL;
let urlDiv;
let selectDiv;
let statusDiv;
let statusContent;
let testCompletion = /done/gi
let testOngoing = /ongoing/gi
let count = 0;

asabenehChallenges2020
  .challenges
    .forEach((element) => {
      // Initialize a new list item at the start of each loop
      lists = document.createElement('li');

      // add challenge name and wrap it in a link
      titleURL = document.createElement('a');
      titleURL.href= element.githubUrl;
      titleURL.textContent = element.name;

      // wrap the challenge name in a div to align it to the left and add the div to the list
      urlDiv = document.createElement('div');
      urlDiv.id = `challengeDiv_${element.name}`;
      urlDiv.style.textAlign = 'left';
      urlDiv.appendChild(titleURL);
      lists.appendChild(urlDiv);

      // create the drop down with a loop by initializing a new select tag each loop and populating it with topics
      topicsList = document.createElement('select');
      element.topics.forEach((i) => {
        topic = document.createElement('option');
        topic.textContent = i.toString();
        topic.value = i;
        topicsList.appendChild(topic);
      });
      topicsList.name = element.name;
      topicsList.id = element.name;

      // wrap it in a div to stick it to the center of the list
      selectDiv = document.createElement('div');
      selectDiv.id = `selectDiv_${element.name}`;
      selectDiv.style.textAlign = 'center';
      selectDiv.appendChild(topicsList);
      lists.appendChild(selectDiv);

      // add status to div to stick to left and add it to list.
      statusDiv = document.createElement('div');
      // span or paragragh to make appending possible html element is needed since an element object can't be appended directly
      statusContent = document.createElement('span');
      statusDiv.id = `statusDiv_${element.name}`;
      statusDiv.style.textAlign = 'right';
      statusContent.textContent = element.status.toString();
      statusDiv.appendChild(statusContent);
      lists.appendChild(statusDiv);
        
      // check for completion, ongoing and coming status and colour the backgound accordingly
      if (testCompletion.test(element.status)) {
        lists.style.backgroundColor = 'lightgreen';
        } else if (testOngoing.test(element.status)) {
          lists.style.backgroundColor = 'yellow';
        } else {
          lists.style.backgroundColor = 'red';
        }

      // float all elements to the center vertically and to be equidistant of each other
      lists.style.display = 'flex';
      lists.style.alignItems = 'center';
      lists.style.justifyContent = 'space-between';
      lists.style.padding = '15px';
      lists.style.marginTop = '1px';
      lists.style.listStyleType = 'none';

      // add the item to the overrall list
      listBag.appendChild(lists);
      listBag.style.padding = '0';
      listBag.style.margin = 'auto';
      listBag.style.width = '800px';
})
divWrap.appendChild(listBag);

const nameHeader = document.createElement('h1');
nameHeader.innerHTML = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
divWrap.appendChild(nameHeader);

let socialLinks = document.createElement('table');
let socialLinkRow;
let socialLinkData;
let iterate = asabenehChallenges2020.author.socialLinks.length;
for (let row = 0; row < 1; row++) {
    socialLinkRow = document.createElement('tr')
    for (let column = 0; column < iterate; column++) {
        socialLinkData = document.createElement('td');
        socialLinkData.innerHTML = `
        <a href="${asabenehChallenges2020.author.socialLinks[column].url}">
            <img src ="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" width="20" height="20">
        </a>`
        socialLinkRow.appendChild(socialLinkData);
    }
    socialLinks.appendChild(socialLinkRow);
}
socialLinks.style.margin = 'auto';
socialLinks.style.width = 'auto';
divWrap.appendChild(socialLinks);

const paragraph = document.createElement('p');
paragraph.innerHTML = asabenehChallenges2020.author.bio;
divWrap.appendChild(paragraph);
paragraph.style.width = '800px';
paragraph.style.margin = 'auto';

// add breaks to create space as shown in the exercise
const breaker = document.createElement('br');
divWrap.appendChild(breaker);

// create a table with three column heads: Titles, skills, qualifications
const cvTable = document.createElement('table');
  const cvHeaderRow = document.createElement('tr');
  const cvHeaderT = document.createElement('th');
  const cvHeaderS = document.createElement('th');
  const cvHeaderQ = document.createElement('th');
  cvHeaderT.textContent = 'Titles';
  cvHeaderS.textContent = 'Skills';
  cvHeaderQ.textContent = 'Qualifications';
  cvHeaderT.style.textAlign = 'left';
  cvHeaderS.style.textAlign = 'left';
  cvHeaderQ.style.textAlign = 'left';
  cvHeaderRow.appendChild(cvHeaderT);
  cvHeaderRow.appendChild(cvHeaderS);
  cvHeaderRow.appendChild(cvHeaderQ);
  cvTable.appendChild(cvHeaderRow);

// Populate the table with data
const author = asabenehChallenges2020.author;

// Assuming titles, skills, and qualifications have the same length
for (let i = 0; i < author.titles.length; i++) {
  const cvRow = document.createElement('tr');
  const titleCell = document.createElement('td');
  const skillsCell = document.createElement('td');
  const qualificationsCell = document.createElement('td');

  let cleanTitles = author.titles[i].toString().replace(',',' ');
  titleCell.textContent = cleanTitles;
  skillsCell.textContent = author.skills[i];
  qualificationsCell.textContent = author.qualifications[i];

  titleCell.style.textAlign = 'left';
  titleCell.style.fontSize = '14px';
  skillsCell.style.textAlign = 'left';
  skillsCell.style.fontSize = '14px';
  qualificationsCell.style.textAlign = 'left';
  qualificationsCell.style.fontSize = '14px';
  
  // Add CSS styles to make all cells same width and prevent new lines
  titleCell.style.width = '33.33%'; // Each cell takes one-third width of the table
  titleCell.style.whiteSpace = 'nowrap'; // Prevent text wrapping
  skillsCell.style.width = '33.33%'; // Each cell takes one-third width of the table
  skillsCell.style.whiteSpace = 'nowrap'; // Prevent text wrapping
  qualificationsCell.style.width = '33.33%'; // Each cell takes one-third width of the table
  qualificationsCell.style.whiteSpace = 'nowrap'; // Prevent text wrapping

  cvRow.appendChild(titleCell);
  cvRow.appendChild(skillsCell);
  cvRow.appendChild(qualificationsCell);
  cvTable.appendChild(cvRow);
}

divWrap.appendChild(cvTable);
cvTable.style.margin = 'auto';

// add breaks as shown in exercise example
const breaker2 = document.createElement('br')
divWrap.appendChild(breaker2);


// keywords section
const keyWordsHeader = document.createElement('h2');
keyWordsHeader.textContent = 'Key Words';
keyWordsHeader.style.textAlign = 'left';
keyWordsHeader.style.marginLeft = '200px';
divWrap.appendChild(keyWordsHeader);

const keywordsParagraph = document.createElement('p');
const keyWords = asabenehChallenges2020.keywords;
let spanElement;
let breakerKey;
// loop through keywords and append them to the paragraph while styling them accordingly
for (let i = 0; i < keyWords.length; i++) {
  spanElement = document.createElement('span');
  let element = `#${keyWords[i]}`;
  spanElement.textContent = element;
  spanElement.style.backgroundColor = colourArray[Math.floor(Math.random() * colourArray.length)];
  spanElement.style.fontSize = '12px';
  spanElement.style.fontStyle = 'italic'
  spanElement.style.borderRadius = '10px';
  spanElement.style.padding ='10px';
  spanElement.style.marginRight = '5px';
  spanElement.style.marginBottom = '10px';

  keywordsParagraph.appendChild(spanElement);
}
keywordsParagraph.style.margin = 'auto';
keywordsParagraph.style.whiteSpace = 'nowrap';
keywordsParagraph.style.maxWidth = '800px';
keywordsParagraph.style.display = 'flex'; // Use flexbox for layout
keywordsParagraph.style.textAlign = 'justify';
keywordsParagraph.style.flexWrap = 'wrap'; // Allow items to wrap to the next line if they exceed the container width
divWrap.appendChild(keywordsParagraph);