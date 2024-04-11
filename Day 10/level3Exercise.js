import { countries } from "./countries";
// Q1
// How many languages are there in the countries object file.
// Extract all languages from the countries object
const allLanguages = Object.values(countries).flatMap(country =>
    country.languages.map(language => language.name)
  );
  
  // Get unique languages using a Set
  const uniqueLanguages = new Set(allLanguages);
  
  console.log(uniqueLanguages.size); 
// *** Use the countries data to find the 10 most spoken languages:

const languages = Object.values(countries).flatMap(country =>
    country.languages.map(language => language.name)
  );
  
  const languageCount = allLanguages.reduce((acc, lang) => {
    acc[lang] = (acc[lang] || 0) + 1;
    return acc;
  }, {});

  const languageCountArray = Object.entries(languageCount).map(([language, count]) => ({
    language,
    count,
  }));
  
  // Sort languages by count in descending order
  languageCountArray.sort((a, b) => b.count - a.count);
  
  // Get the top 10 most spoken languages
  const top10Languages = languageCountArray.slice(0, 10);