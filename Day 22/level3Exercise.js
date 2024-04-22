
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
let testCompletion = /done/gi
let testOngoing = /ongoing/gi
let count = 0;
asabenehChallenges2020
  .challenges
    .forEach((element) => {
        lists = document.createElement('li');
        topicsList = document.createElement('select');
        const dropDown = element.topics.forEach((i) => {
            topic = document.createElement('option');
            topic.textContent = i.toString();
            topic.value = i;
            topicsList.appendChild(topic);
        });
        lists.innerHTML = 
        `<div style="text-align: left;">
          <a href="${element.githubUrl}">
            ${element.name}
          </a>
        </div>

        <div id="dropDown" style="text-align: center;">
          ${dropDown}
        </div>

        <div style="text-align: right;">
          ${element.status}
        </div>`;
        
        topicsList.name = element.name;
        topicsList.id = element.name;

        if (testCompletion.test(element.status)) {
            lists.style.backgroundColor = 'lightgreen';
        } else if (testOngoing.test(element.status)) {
            lists.style.backgroundColor = 'yellow';
        } else {
            lists.style.backgroundColor = 'red';
        }

        lists.style.display = 'flex';
        lists.style.alignItems = 'center';
        lists.style.justifyContent = 'space-between';
        lists.style.padding = '15px';
        lists.style.marginTop = '1px';
        lists.style.listStyleType = 'none';

        listBag.appendChild(lists);
        listBag.style.padding = '0';
        listBag.style.margin = 'auto';
        listBag.style.width = '800px'
        count++
        console.log(count);
    })
divWrap.appendChild(listBag);

const nameHeader = document.createElement('h3');
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


