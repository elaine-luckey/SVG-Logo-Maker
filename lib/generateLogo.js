//Importing all classes from the shapes.js file
import { Triangle, Circle, Square } from './shapes';

//Creating instances of the imported classes
const triangle = new Triangle();
const circle = new Circle();
const square = new Square();

//Defining function named generateLogo that takes an object as a param to store the text, textColor, shape, and shapeColor
const generateLogo = ({text, textColor, shape, shapeColor}) => {
//Storing the final SVG markup string
let markup = '';

//Creating a SVG file using markup file with inquirer.js
markup += '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

//Creating an instance of the Circle class object and set the shape color. Calling the render() method on object to return the string
if (shape === 'Circle') {
    circle.setColor(shapeColor)
    const results = circle.render();
    markup += results;

//Creating an instance of the Square class object and set the shape color. Calling the render() method on object to return the string

} else if (shape === 'Square'){
    square.setColor(shapeColor)
    const results = square.render();
    markup += results;

//Creating an instance of the Triangle class object and set the shape color. Calling the render() method on object to return the string
} else {
    triangle.setColor(shapeColor)
    const results = triangle.render();
    markup += results;
}

//Set all the inquirer text input to all uppercase and adding font family
markup += `<text x="150" y="125" font-size="35" text-anchor="middle" font-family: 'Open Sans', sans-serif" fill="${textColor}">${text.toUpperCase()}</text></svg>`;

//returning the markup file
return markup;

}

