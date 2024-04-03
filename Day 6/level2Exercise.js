//question 1
let character =`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
let answer = ``
for (let index = 0; index < 1; index++) {
    let length = Math.floor(Math.random()*11)
    for (let x = 0; x < length; x++) {
        answer += character.charAt(Math.floor(Math.random()*character.length))
    }
}
console.log(answer)

//question 2
let hex =`0123456789ABCDEF`
let answerTwo = `#`
for (let index = 0; index < 1; index++) {
    let length = Math.floor(Math.random()*11)
    for (let x = 0; x < length; x++) {
        answerTwo += hex.charAt(Math.floor(Math.random()*hex.length))
    }
}
console.log(answerTwo)

//question 3
let red
let blue
let green
for(a = 0; a < 1; a++){
    red=Math.floor(Math.random()*256);
    blue=Math.floor(Math.random()*256);
    green=Math.floor(Math.random()*256);
}
console.log(`rgb(${red},${blue},${green})`)

//question 4
const questionFour = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let x = 0
const countriesLength = Array()
for (const iterator of questionFour) {
    countriesLength[x] = iterator.length
    x+=1
}
console.log(countriesLength)

//question 5
const table = Array()
let tableData = Array()

for (const iterator of questionFour) {
    tableData = []
    tableData.push(iterator);
    tableData.push(iterator.substring(0,3).toUpperCase());
    tableData.push(iterator.length)
    table.push(tableData)
}    
console.log(table)

//question 6
const questionSix = []
let lastID = questionFour.length - 1
for (let index = 0; index < questionFour.length; index++) {
    const test = questionFour[index].toLowerCase().includes(`land`);
    if (test){
        questionSix.push(questionFour[index])
    }
    else if((index == lastID) && questionSix.length === 0){
        console.log(`All these countries are without land.`)
    }
}
console.log(questionSix)

//question 7
let iaCheck = /ia$/gi
const questionSeven = []
for (let index = 0; index < questionFour.length; index++) {
    const test = questionFour[index].match(iaCheck);
    if (test && test.length > 0){
        questionSeven.push(questionFour[index])
    }
    else if((index === lastID) && (questionSeven.length === 0)){
        console.log(`These are countries ends without ia`)
    }
}
console.log(questionSeven)

//question 8
const questionEight = [];
for (const iterator of questionFour) {
    questionEight.push(iterator.length);
}

const maxIndex = questionEight.indexOf(Math.max(...questionEight));
console.log(questionFour[maxIndex]);

//question 9
    const questionNine = []
    for (const iterator of questionFour) {
        if (iterator.length === 5){
            questionNine.push(iterator)
        }
    }
    console.log(questionNine)

//question 10
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let maxCount = 0
const scoreKeep = []

for (let index = 0; index < webTechs.length; index++) {
    const element = webTechs[index].length;
    if (element > maxCount){
        scoreKeep.length = 0;
        scoreKeep.push(webTechs[index]);
        maxCount = element;
    }
    else if(element === maxCount){
        scoreKeep.push(webTechs[index]);
    }
}
console.log(scoreKeep)

//question 11
const webCharacters = []
let webLanguage
let charLength
for (const iterator of webTechs) {
    webLanguage = iterator;
    charLength = iterator.length;
    webCharacters.push([webLanguage, charLength]);
}
console.log(webCharacters)

//question 12
const acro = [`MongoDB`, `Express`, `React`, `Node`]
const mernStack = []
for (const iterator of acro) {
    mernStack.push(iterator.charAt(0).toUpperCase());
}
const acronymFinal = mernStack.join('')
console.log(acronymFinal)

//question 13
const printList = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let index = 0; index < printList.length; index++) {
    console.log(printList[index]);
}

//question 14
const fruit = ['banana', 'orange', 'mango', 'lemon']
const reFruit = []
let fruitLastID = fruit.length -1;

for (let index = fruitLastID; index > -1; index--) {
    reFruit.push(fruit[index]);
}
console.log(reFruit);

//question 15
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
  
  for (const stack of fullStack) {
    for (const element of stack) {
      console.log(element.toUpperCase());
    }
  }
  