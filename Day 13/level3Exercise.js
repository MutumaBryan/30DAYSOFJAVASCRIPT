// Check the speed difference among the following loops: while, for, for of, forEach
// My Solution
const loops = () =>
{
    let i = 10
    let x = 0
    let yWhile
    let y
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const arrTest = []
    console.time('This is while loop');
    while(x < i){
        x++
        yWhile = x
    }
    console.timeEnd('This is while loop')

    console.time('This is for loop')
    for (let x = 0; x < i; x++) {
        y = x
    }
    console.timeEnd('This is for loop')
    console.time('This is for of loop')
    for (const iterator of arr) {
        arrTest.push(iterator)
    }
    console.timeEnd('This is for of loop')

    console.time('This is forEach loop')
    const arrForeachTest = arr.forEach(element => element + 1);
    console.timeEnd('This is forEach loop')
    console.log(arrForeachTest)
    console.log(yWhile)
    console.log(y)
    console.log(arrTest)
}
console.log(loops())