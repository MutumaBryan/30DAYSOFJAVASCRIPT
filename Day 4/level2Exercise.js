/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
Check if a day is weekend day or a working day. Your script will take day as an input.
  What is the day  today? Saturday
  Saturday is a weekend.

  What is the day today? saturDaY
  Saturday is a weekend.

  What is the day today? Friday
  Friday is a working day.

  What is the day today? FrIDAy
  Friday is a working day. */

let caseChecker = parseInt(prompt(`Enter your score`))
switch (true){
    case 100>=caseChecker && caseChecker>=90:
        console.log(`A`);
        break;
    case 89>=caseChecker && caseChecker>=70:
        console.log(`B`);
        break;
    case 69>=caseChecker && caseChecker>=60:
        console.log(`C`);
        break;
    case 59>=caseChecker && caseChecker>=50:
        console.log(`D`);
        break;
    case 49 >= caseChecker && caseChecker >= 0:
        console.log(`F`);
        break;
    default:
        console.log(`Enter the right score`);
        break;
}

let season = prompt(`Enter the month`)
let seasonCheck = season.toLowerCase()
switch (seasonCheck) {
    case `september`:
    case `october`:
    case `november`:
        console.log(`The season is Autumn`);
        break;
    case `december`:
    case `january`:
    case `february`:
        console.log(`The season is Winter`);
        break;
    case `march`:
    case `april`:
    case `may`:
        console.log(`The season is Spring`);
        break;
    case `june`:
    case `july`:
    case `august`:
        console.log(`The season is Summer`);
        break;
    default:
        console.log(`error`)
        break;
}

let work = prompt(`Enter the work day`)
let workCheck = work.toLowerCase()
let workCapital = workCheck.charAt(0).toUpperCase()+workCheck.slice(1)
switch (workCheck) {
    case `saturday`:
    case `sunday`:
        console.log(`${workCapital} is a weekend`);      
        break;
    case `monday`:
    case `tuesday`:
    case `wednesday`:
    case `thursday`:
    case `friday`:
        console.log(`${workCapital} is a weekday`);
        break;
    default:
        break;
}