// Read the cats api and find the average weight of cat in metric unit.
const catsAPI = 'https://api.thecatapi.com/v1/breeds' 
// My solution
fetch(catsAPI).then(respons => respons.json()).then(data => {
    const weightArray = 
    data.map(element => {
        const values = Object.values(element.weight)
        return values[1]
    })
    const convertToNumbers = []
     weightArray.map(element => element.match(/\d+/g).forEach(i => {
        convertToNumbers.push(Number(i));
    }));
    const totalweight = convertToNumbers.reduce((acc, cur)=>
        acc + cur
    , 0);
    const aveWeight = totalweight/convertToNumbers.length;
    console.log('Average Weight of a cat is:', aveWeight);
}).catch(err => console.error("error fetching data", err));
// Q2
// Read the countries api and find out the 10 largest countries
const countriesAPI='https://restcountries.com/v2/all'
// My Solution
fetch(countriesAPI).then(response => response.json()).then(data =>{
    const areaArray = data.map(element => element.area)
    const sortedArray = areaArray.slice().sort((a,b)=>b-a).slice(0,10);
    const topTen =[]
    for (const iterator of sortedArray) {
        let index = areaArray.findIndex(i => i===iterator);
        topTen.push(data[index].name)
    }
    console.log(topTen);
}).catch(err => console.error('Unable ot fetch data:', err));

//Q3
// Read the countries api and count total number of languages in the world used as officials.
// My solution
fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    const langSet = new Set()
     data.forEach(cur=>{
        for(let i=0; i<cur.languages.length; i++){
            langSet.add(cur.languages[i].name)
        }
    })
    console.log(langSet.size)
}).
catch(err => console.error("Unable to fetch data:", err))
