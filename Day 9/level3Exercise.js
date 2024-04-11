// Q1
// Use the countries information, in the data folder. Sort countries by name, by capital, by population
const sortCountries = () => {
    // Sort by name using localeCompare
    const nameSorted = countries.slice().sort((a, b) => a.name.localeCompare(b.name));

    // Sort by capital using localeCompare
    const capitalSorted = countries.slice().sort((a, b) => a.capital.localeCompare(b.capital));

    // Sort by population numerically
    const populationSorted = countries.slice().sort((a, b) => a.population - b.population);

    return { nameSorted, capitalSorted, populationSorted };
};

// Q2
// Find the 10 most spoken languages:
const mostSpokenLanguages = (countries, number) => {
    // Create an object to store language counts
    const languageCounts = {};

    // Iterate through each country
    for (const country of Object.values(countries)) {
        // Iterate through each language in the country
        for (const language of country.languages) {
            const { country: languageName, count } = language;
            // Add the language count to the languageCounts object
            languageCounts[languageName] = (languageCounts[languageName] || 0) + count;
        }
    }

    // Convert the languageCounts object to an array of objects
    const languagesArray = Object.entries(languageCounts).map(([country, count]) => ({ country, count }));

    // Sort the languages array in descending order of count
    const sortedLanguages = languagesArray.sort((a, b) => b.count - a.count);

    // Return the top N languages
    return sortedLanguages.slice(0, number);
}

// Q3
// Use countries_data.js file create a function which create the ten most populated countries
const mostPopulatedCountries = (countries, count) => {
    // Sort the countries array by population in descending order
    const sortedCountries = countries.sort((a, b) => b.population - a.population);
    
    // Slice the sorted array to get the top 'count' countries
    const topCountries = sortedCountries.slice(0, count);

    // Map the top countries to the desired format
    const formattedCountries = topCountries.map(country => ({
        country: country.country,
        population: country.population
    }))}

