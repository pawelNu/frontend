// Classes
// it is just syntax-sugar
// does not provide any new functionalities
// attributes in classes cannot be private

class Pizza {
    constructor(type, size) {
        this.type = type;
        this.size = size;
        this.crust = "original";
        this.toppings = [];
    }

    getCrust() {
        return this.crust;
    }

    setCrust(crust) {
        this.crust = crust;
    }

    getToppings() {
        return this.toppings;
    }

    setToppings(topping) {
        this.toppings.push(topping);
    }

    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza("pepperoni", "small");
// myPizza.type = "supreme"; // not desirable
myPizza.setCrust("thin");
myPizza.bake();
console.log("myPizza.getCrust()");
console.log(myPizza.getCrust());

myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());

class PizzaBase {
    constructor(size) {
        this.size = size;
        this.crust = "original";
    }

    getCrust() {
        return this.crust;
    }

    setCrust(crust) {
        this.crust = crust;
    }
}

class SpecialtyPizza extends PizzaBase {
    constructor(size) {
        super(size);
        this.type = "the works";
    }

    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const mySpecialtyPizza = new SpecialtyPizza("medium");
mySpecialtyPizza.slice();

// Factory function
// solution for creating object with private attributes

function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
    };
}

const myPizza2 = pizzaFactory("small");
myPizza2.bake();

// class with support for public and private

class Pizza2 {
    crust = "original"; // public field
    #sauce = "traditional"; // private field
    #size;

    constructor(size) {
        this.#size = size;
    }

    getCrust() {
        return this.crust;
    }

    setCrust(crust) {
        this.crust = crust;
    }

    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}

const myPizza3 = new Pizza2("medium") 
myPizza3.hereYouGo();
console.log(myPizza.crust)
console.log(myPizza.sauce) // undefined
console.log(myPizza.#sauce) // error
