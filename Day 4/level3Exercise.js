/*Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
Write a program which tells the number of days in a month, now consider leap year */

let month = prompt(`Enter a month:`)
let year = parseInt(prompt(`Enter the year:`))
let monthCheck = month.toLowerCase()
let monthSentence = monthCheck.charAt(0).toUpperCase()+monthCheck.slice(1)

switch (monthCheck) {
    case `january`:
    case `march`:
    case `may`:
    case `july`:
    case `august`:
    case `october`:
    case `december`:
        console.log(`${monthSentence} has 31 days`);
        break;
    case `february`:
        console.log(`${monthSentence} has 28 days`);
        break;
    case `april`:
    case `june`:
    case `september`:
    case `november`:
        console.log(`${monthSentence} has 30 days`);
        break;
    default:
        break;
}

if (year%4 == 0) {
    switch (monthCheck) {
        case `january`:
        case `march`:
        case `may`:
        case `july`:
        case `august`:
        case `october`:
        case `december`:
            console.log(`${monthSentence} has 31 days`);
            break;
        case `february`:
            console.log(`${monthSentence} has 29 days`);
            break;
        case `april`:
        case `june`:
        case `september`:
        case `november`:
            console.log(`${monthSentence} has 30 days`);
            break;
        default:
            break;
    }
} else {
    switch (monthCheck) {
        case `january`:
        case `march`:
        case `may`:
        case `july`:
        case `august`:
        case `october`:
        case `december`:
            console.log(`${monthSentence} has 31 days`);
            break;
        case `february`:
            console.log(`${monthSentence} has 28 days`);
            break;
        case `april`:
        case `june`:
        case `september`:
        case `november`:
            console.log(`${monthSentence} has 30 days`);
            break;
        default:
            break;
    }
}