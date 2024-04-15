// Create a closure which has three inner functions
function variance (...arg){
    const args = arg;
    function mean (){
        const sum = args.reduce((acc, cur)=> acc+cur, 0);
        const mean = sum/args.length;
        return mean
    }
    function numerator(){
        const difference = args.reduce((acc, cur)=>acc+Math.pow((cur-mean()),2), 0);
        return difference;
    }
    function denominator(){
        let sampleSize = args.length - 1
        return sampleSize;
    }
    return numerator()/denominator();
}
const closure = variance(48,10,32,17,86,81,15,77,56,23,44,55,68)
console.log(closure)