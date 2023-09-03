//Inquirer (node package manager) imported
const inquirer = require("inquirer");
//File system module (node package manager) imported
const writeFile = require("fs").promises;
//Importing all the classes from the shapes.js file
import { Triangle, Circle, Square } from './shapes';


//Starting inquirer.js in the terminal
const startInquirer = async () => {
    console.log("Have fun generating an SVG logo!");

    try {
        const userInputs = await inquirer.prompt([
            //First question to ask the shape the user wants to use for the logo
            {
                name: "shape",
                type: "list",
                message: "What shape would you like your logo to be? Please choose one of the following:",
                choices: [Circle, Square, Triangle]
            },
            //Second question for the color of the logo
            {
                name: "shapeColor",
                type:"list",
                message: "Please select the color you would like your logo shape to be:",
                choices: [hex, rgb, hsl, hwb],
            },
            //Third question for the logo for characters
            {
                name: "text",
                type: "input",
                message: "Please enter the text you would like to display inside the logo (1-3 characters only):",
                validate: (letters) => {
                    //Adding a check to validate that the text entered is not longer than 3 characters
                    if (letters && letters.length <= 3) {
                        return true;
                    } else {
                        console.log('Please only enter a max of 3 characters for your logo')
                        return false;
                    }
                }
            },
            //Fourth question for the logo for color of the logo
            {
                name: "textColor",
                type: "list",
                message: "Please select the color you would like your text color to be:",
                choices: [hex, rgb, hsl, hwb],
            },
        ])
        //generate the logo using the data from above and the generateLogo.js file
        const results = generateLogo(data);
    
        //write the file to be in the ./dist folder
        await writeFile('./dist/logo.svg', result);
        
        console.log ("Your SVG logo has been created!");
    } catch (error) {
        console.log(error);
    }
}

startInquirer();