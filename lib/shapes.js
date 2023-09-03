//Shapes class that is the parent class for all shapes
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVariable){
        this.color = colorVariable;
    }
}

//Child class for creation of circle to inherit the same functionality as the parent class Shape
class Circle extends Shape {
    render() {
        //Returns the circle shape with the color selected by the user
        return `<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        //Returns the square shape with the color selected by the user
        return `<rect x="70" y="32" width="160" height="160" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        //Returns the triangle shape with the color selected by the user
        return `<polygon points="50, 160 70, 180 30, 180" fill="${this.color}"/>`;
    }
}

module.exports = {
    Circle,
    Square,
    Triangle,
};