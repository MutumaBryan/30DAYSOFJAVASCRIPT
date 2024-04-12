// Q2
// Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
// My Solution
const cleanText = (text)=>{
    if(typeof text !== 'string') {
        console.log(`${text} is not a string`) 
        return
    }
    let newTxt = text.replace(/[%#@$&;!]/g, '')
    return newTxt
}
console.log(cleanText(sentence))
// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
// My solution
const mostFrequentWords = (text, number) => {
    let paragraph = cleanText(text);
    const paragraphObject = {}
    const wordCountArray = []

    paragraph.split(' ').forEach(word => {
        paragraphObject[word] = (paragraphObject[word]||0) + 1
    })
console.log(paragraphObject)
    for (const [word, count] of Object.entries(paragraphObject)) {
        wordCountArray.push({word: word, count: count})
    }
    
    const wordCountOrdered = wordCountArray.sort((a,b) => b.count-a.count)
    return wordCountOrdered.slice(0,number)
}
console.log(mostFrequentWords(sentence, 10))