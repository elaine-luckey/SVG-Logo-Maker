//Shapes class that is the parent class for all Shapes
class Shapes {
    constructor() {
        this.color = "";
    }
    setColor(colorVariable){
        this.color = colorVariable;
    }
}

//Child class for creation of circle to inherit the same functionality as the parent class Shapes
class Circle extends Shapes {
    render() {
        //Returns the circle Shapes with the color selected by the user
        return `<circle cx="150" cy="110" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shapes {
    render() {
        //Returns the square Shapes with the color selected by the user
        return `<rect x="65" y="28" width="160" height="160" fill="${this.color}"/>`;
    }
}

class Triangle extends Shapes {
    render() {
        //Returns the triangle Shapes with the color selected by the user
        return `<polygon points="150,15 243,176 57,176" fill="${this.color}" />`;
    }
}

module.exports = {
    Circle,
    Square,
    Triangle,
    Shapes,
};