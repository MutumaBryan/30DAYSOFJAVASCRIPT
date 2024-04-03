let count = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
let countLove = /love/gi
let countLoveArray = count.match(countLove)
let answer = countLoveArray.length
console.log(answer)

let because = 'You cannot end a sentence with because because because is a conjunction'
let countBecause = /because/gi
let newAns = (because.match(countBecause)).length
console.log(newAns)

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence = sentence.replace(/[@%&$;#]/g,'')
console.log(sentence)

let incomeStr = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income = incomeStr.match(/\d+/g)
console.log(income)
let i = 0
let end = income.length + 1
let total = 0
console.log(total)

while (i < income.length) {
    income[i] = parseInt(income[i])
    i++
    if (i === end){
        break
    }
}
console.log(income)
for (let a = 0; a < income.length; a++) {
    total = total + income[a];   
}
console.log(total)

