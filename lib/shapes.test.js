const { Circle, Square, Triangle, Shapes } = require('./shapes');

describe('Testing all shapes set the given color and the shapes are created based off of the render() method from the shapes.js file', () => {

    test('should set color correctly', () => {
        const shapes = new Shapes();
        shapes.setColor('red');
        expect(shapes.color).toBe('red');
    });

    test('should render a circle with the given color', () => {
        const circle = new Circle();
        circle.setColor('blue');
        const renderedCircle = circle.render();
        expect(renderedCircle).toBe('<circle cx="150" cy="110" r="80" fill="blue" />');
    });

    test('should render a square with the given color', () => {
        const square = new Square();
        square.setColor('green');
        const renderedSquare = square.render();
        expect(renderedSquare).toBe('<rect x="65" y="28" width="160" height="160" fill="green"/>');
    });


    test('should render a triangle with the given color', () => {
        const triangle = new Triangle();
        triangle.setColor('purple');
        const renderedTriangle = triangle.render();
        expect(renderedTriangle).toBe('<polygon points="150,15 243,176 57,176" fill="purple" />');
    });

});
