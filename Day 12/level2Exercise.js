// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
const tenMostFrequentWords = (text, number) => {
    if(typeof text !== 'string') {
        console.log(`${text} is not a string`) 
        return
    }

    // Split the text into an array of words
    const words = text.split(/\s+/);

    // Create an object to store word counts
    const wordCounts = {};

    // Count the occurrences of each word
    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    // Convert the word counts object into an array of objects
    const wordCountArray = Object.keys(wordCounts).map(word => ({
        word: word,
        count: wordCounts[word]
    }));

    // Sort the array by count in descending order
    const sortedWordCountArray = wordCountArray.sort((a, b) => b.count - a.count);

    // Return the top 'number' words
    return sortedWordCountArray.slice(0, number);
}

console.log(tenMostFrequentWords(paragraph, 10))

