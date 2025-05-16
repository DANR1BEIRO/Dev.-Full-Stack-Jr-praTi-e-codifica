let movie = {
    name: ["LOTR", "chaves"],
    displayInfo: function () {
        return `${this.name}`;
    },
};

class Anime {
    constructor(name, genre, seasons) {
        this.name = name;
        this.genre = genre;
        this.seasons = seasons;
        this.displayInfo = function () {
            return `Name: ${this.name}\nGenre: ${this.genre}\nSeasons: ${this.seasons}`;
        };
    }
}

let attackOnTitan = new Anime("Attack on Titan", "Seinen", "5");
console.log(attackOnTitan);

console.log("----------------------------");

function Ninja(name, age, village, rank) {
    this.name = name;
    this.age = age;
    this.village = village;
    this.rank = rank;
    this.displayInfo = function () {
        console.log("----------------------------");
        return `Name: ${this.name}\nAge: ${this.age}\nVillage: ${this.village}\nRank: ${this.rank}`;
    };
}

let kakashi = new Ninja("Kakashi Hatake", 27, "Hidden Leaf", "Jounin");
let sarutobi = new Ninja("Hiruzen Sarutobi", 58, "Hidden Leaf", "Hokage");

console.log(sarutobi);
console.log(kakashi.displayInfo());

console.log("----------------------------");

class Robot {
    constructor(name, serialNumber) {
        this.name = name;
        this.serialNumber = serialNumber;
    }
}

let walle = new Robot("Wall-E", "WE-0001");
let eva = new Robot("Eva", "EV-0001")

let robots = [walle, eva]

console.log("Valores das propriedades usando for in:");
for (const key in walle) {
    console.log(walle[key]);
}

console.log("----------------------------");

console.log("Chaves e valores usando for in:");
for (const key in walle) {
    console.log(`${key}: ${walle[key]}`);
}

console.log("----------------------------");
console.log("Iterando sobre os valores do array usando for of:");
for (const robot of robots) {
    console.log(robot);
}

// for...in em um objeto itera sobre suas chaves (nomes das propriedades).
// for...in em um array itera sobre seus índices (como strings) e 
// outras propriedades enumeráveis. Não é a forma recomendada para 
// iterar sobre os elementos de um array.
// Use for...of para iterar sobre os valores de um array (ou qualquer outro objeto iterável).