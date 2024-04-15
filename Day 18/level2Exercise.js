// Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// My solution
fetch(catsAPI).then(response => response.json()).then(
    data => {
        data.forEach(element => {
            let catName = element.name;
            console.log(`Cat name:${catName}`)
        });
    }
).catch(error=> console.error('Error fetching the data:', error));