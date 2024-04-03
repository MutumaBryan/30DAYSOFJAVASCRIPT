// Question 1 
// Modify the userIdGenerator function. 
// Declare a function name userIdGeneratedByUser. 
// It doesn’t take any parameter but it takes two inputs using prompt(). 
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
    let IdCharCount = parseInt(prompt(`How many characters should an ID have?`))
    let err = `Enter a valid number`
    if(IdCharCount ==! number || IdCharCount == 0)
    {
        return err
    }
    
    let totalId = parseInt(prompt(`How many IDs do you need?`))
    if(totalId ==! number || totalId == 0){
        return err 
    }

    const character = `0123456789AaBbCcDdEeFfGgHhIiKkLlMmNnOoPpQqRrSsTtUuVvWwYyZz`
    let idList = ''
    let ID = ''

    for (let index = 1; index < totalId; index++) {
        for (let index = 1; index < IdCharCount; index++) {
            const element = character[Math.floor(Math.random()*character.length)];
            ID = ID + element
        }
        idList = idList + `\n` + ID
    }
    return idList
}

// question 2
/* Write a function name rgbColorGenerator and it generates rgb colors.*/
const rgbColorGenerator = () => {
    const getRandomColorValue = () => Math.floor(Math.random() * 256); // Helper function to generate a random color value (0-255)
    const [red, green, blue] = [getRandomColorValue(), getRandomColorValue(), getRandomColorValue()]; // Destructuring to get random values for red, green, and blue

    return `rgb(${red}, ${green}, ${blue})`; // Template literal to format the RGB color string
};

// question 3
// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

const arrayOfHexaColors = () => {
    const getArrayLength = () => Math.ceil(Math.random() * 10);
    const characters = '0123456789ABCDEF';
    const hexArray = [];

    for (let i = 0; i < getArrayLength(); i++) {
        let color = '#';
        for (let j = 0; j < 6; j++) {
            color += characters[Math.floor(Math.random() * characters.length)];
        }
        hexArray.push(color);
    }

    return hexArray;
};

// questsion 4
// Write a function arrayOfRgbColors which return any number of RGB colors in an array

const arrayOfRgbColors = () => {
    const getRandomColorValue = () => Math.floor(Math.random() * 256); // Helper function to generate a random color value (0-255)
    const getRgbColor = () => `rgb(${getRandomColorValue()}, ${getRandomColorValue()}, ${getRandomColorValue()})`; // Helper function to generate a random RGB color string

    const arrayLength = Math.ceil(Math.random() * 10); // Random array length (1-10)
    return Array.from({ length: arrayLength }, getRgbColor); // Create an array of random RGB colors
};

// question 5
// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

const convertHexaToRgb = () => {
    const getHexValue = () => {
        let characters = '0123456789ABCDEF';
        return `${characters[Math.floor(Math.random()*characters.length)]}${characters[Math.floor(Math.random()*characters.length)]}`
    }
    const getHexCode = () => `#${getHexValue()}${getHexValue()}${getHexValue()}`

    const cleanHex = () =>
    {
        let hexToRGB = getHexCode();
        hexToRGB = hexToRGB.slice(1);
        if(hexToRGB.match(/[ABCDEF]/g)){
        for (const iterator of hexToRGB) {
            switch (iterator) {
                case `A`:
                    hexToRGB.replace(/A/g,`10`)
                    break;
                case `B`:
                    hexToRGB.replace(/B/g,`11`)
                    break;
                case `C`:
                    hexToRGB.replace(/C/g,`12`)
                    break;
                case `D`:
                    hexToRGB.replace(/D/g,`13`)
                    break;
                case `E`:
                    hexToRGB.replace(/E/g,`14`)
                    break;
                case `F`:
                    hexToRGB.replace(/F/g,`15`)
                    break;
                default:
                    break;
                }
            }
        }
        return hexToRGB;
    }
    const rgbCalculator = () => {
        let hexToRGB = cleanHex();
        let r = parseInt(hexToRGB.substring(0, 2), 16);
        let g = parseInt(hexToRGB.substring(2, 4), 16);
        let b = parseInt(hexToRGB.substring(4, 6), 16);

        return `rgb(${r},${g},${b})`;
    }
return rgbCalculator();
}


