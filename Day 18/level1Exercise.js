
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    // Iterate through each country in the data array
    data.forEach(country => {
      // Extract the desired information from each country object
      const name = country.name;
      const capital = country.capital;
      const languages = country.languages.map(lang => lang.name).join(', '); // Convert languages array to comma-separated string
      const population = country.population;
      const area = country.area;

      // Print the information for each country
      console.log(`Country: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Languages: ${languages}`);
      console.log(`Population: ${population}`);
      console.log(`Area: ${area} square kilometers\n`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
