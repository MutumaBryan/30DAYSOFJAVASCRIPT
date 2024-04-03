/*
Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Using console.log() print out the following quote by Mother Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
Check if 'on' is found in both python and jargon
I hope this course is not full of jargon. Check if jargon is in the sentence.
Generate a random number between 0 and 100 inclusively.
Generate a random number between 50 and 100 inclusively.
Generate a random number between 0 and 255 inclusively.
Access the 'JavaScript' string characters using a random number.
Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
)
console.log("Love is not patronizing and charity isn't about pity, it is about love.\n Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
)
console.log(typeof('10') == typeof(10))
console.log(typeof(parseInt('10')) == typeof(10))
console.log(parseFloat('9.8')== 10)
console.log(Math.ceil(parseFloat('9.8')) == 10)
console.log('python'.includes(`on`) && 'jargon'.includes(`on`))
console.log(`I hope this course is not full of jargon`.includes(`jargon`))
console.log(Math.floor(Math.random()*101))
console.log(Math.floor(Math.random()*51)+50)
console.log(Math.floor(Math.random()*256))
console.log(`JavaScript`[Math.floor(Math.random()*10)])
console.log('1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
let a ='You cannot end a sentence with because because because is a conjunction'
let b = a.indexOf('because')
let c = a.indexOf(' is')-b
console.log(a.substr(b,c))
