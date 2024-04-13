// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
// You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. 
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
// My solution
class Statistics {
    constructor(...args){
        this.arr = args
    }
    get getArrayToNumber(){
        const newArr = this.arr.flatMap(element => element).filter(i => typeof i === 'number')
        return newArr
    }
    get count(){
        return this.getArrayToNumber.length
    }
    get sum(){
        let sum = this.getArrayToNumber.reduce((acc, cur)=> acc+cur,0)
        return sum
    }
    get min(){
        const min = this.getArrayToNumber.slice().sort((a,b)=> a-b)
        return min[0]
    }
    get max(){
        const max = this.getArrayToNumber.slice().sort((a,b)=> b-a)
        return max[0]
    }
    get range(){
        let range = this.max-this.min
        return range
    }
    get mean(){
        let mean = this.sum/this.count
        return mean
    }
    get median() {
        const sortedArr = this.getArrayToNumber.slice().sort((a, b) => a - b);
        const middle = Math.floor(this.count / 2);
        let median
        this.count % 2 === 0
        ? median = (sortedArr[middle - 1] + sortedArr[middle]) / 2
        : median = sortedArr[middle];
        return median
    }
    get mode() {
        const modeMap = new Map();

        const modeObject =this.getArrayToNumber.reduce((acc, cur) => {
            acc[cur] = (acc[cur]||0) + 1;
            return acc
        }, {});

        for (const [num, freq] of Object.entries(modeObject)) {
            modeMap.set(num, freq);
        }
        const maxFrequency = Math.max(...modeMap.values());
        
        const modes = [...modeMap.entries()].filter(([num, freq]) => freq === maxFrequency);
        return modes;
    }
    get var(){
        let singleVariance
        let acc = 0
        for (let index = 0; index < this.count; index++) {
            singleVariance = this.getArrayToNumber[index] - this.mean;
            acc = acc + Math.pow(singleVariance, 2);
        }
        const variance = acc/this.count
        return variance
    }
    get std(){
        return Math.sqrt(this.var)
    }
    get freqDist(){
        const freqDist = new Map();
        const table = this.getArrayToNumber.reduce((acc,cur)=>{
            acc[cur] = (acc[cur]||0) + 1;
            return acc;
        }, {})

        for (const [num, appearances] of Object.entries(table)) {
            freqDist.set(num, appearances);
        }
        console.log(freqDist)
        return freqDist;
    }
    describe(){
        let describe = `Count: ${this.count},\n Sum:${this.sum},\n Min:${this.min},\n Max:${this.max},\n Range:${this.range},\n Mean:${this.mean},\n Median:${this.median},\n Mode:${this.mode},\n Variance:${this.var},\n Standard Deviation:${this.std},\n Frequency Distribution:${this.freqDist}\n`
        return describe
    }
}
const statistics = new Statistics(ages)
console.log(statistics.describe());