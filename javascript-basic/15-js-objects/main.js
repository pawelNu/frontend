// Objects
// key-value pairs in curly braces

const myObj = { name: "SomeName" };
console.log(myObj.name);

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Repeat"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea",
    },
    action: function () {
        return "Hello";
    },
    action2: function () {
        return `Time for ${this.beverage.morning}`;
    },
};

console.log(anotherObj.alive);
// OR
console.log(anotherObj["alive"]);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj.beverage);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());
console.log(anotherObj.action2());

const vehicle = {
    wheels: 4,
    engine: function () {
        return "Vrrooom!";
    },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
    return "Whoos";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function () {
    return "Shhhhhh...";
};
console.log(tesla.engine());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham",
};

band.keyboards = "Keyboards";
delete band.drums;
console.log('band.hasOwnProperty("drums")');
console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log("Displays key: " + job);
    console.log("Displays value: " + band[job]);
}

// destructing objects
const { guitar: myVariable, bass: myBase } = band;
console.log(myVariable);
console.log(myBase);

const { guitar, vocals, bass } = band;
console.log(guitar);
console.log(vocals);

function sings({vocals}) {
    return `${vocals} sings!`
}
console.log(sings(band))
