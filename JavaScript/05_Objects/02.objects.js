// check in an array of books the ones published before year 2000

let library = [
    { title: "Lord of the ring", author: " J.R.R. Tolkien", year: 1980 },
    { title: "I, robot", author: "Isaac Asimov", year: 2000 },
    { title: "Batman: Year One", author: "Frank Miller", year: 1990 },
    { title: "Watchmen", author: " Alan Moore", year: 2011 },
    { title: "Dragon ball", author: "Akira Toriyama", year: 1984 },
];

for (const book of library) {
    if (book.year < 2000) {
        console.log(book);
    }
}

// Count the amount of movies by genre
let movies = [
    { title: "Lord of the rings", genre: ["Fantasy", "Adventure", "Action", "Drama", "Epic"]},
    { title: "Fight Club", genre: ["Drama", "Thriller", "Psychological"] },
    { title: "Se7en", genre: ["Thriller", "Drama"] },
    { title: "Harry Potter", genre: ["Fantasy", "Adventure", "Mystery"] },
    { title: "Pirates of the Caribbean", genre: ["Fantasy", "Adventure", "Action", "Comedy"]},
    { title: "Shrek", genre: ["Fantasy", "Adventure", "Action", "Comedy", "Animation"]},
];
let genreCounter = {};

movies.forEach((movie) => {
    movie.genre.forEach((genre) => {
        if (genreCounter[genre]) {
            genreCounter[genre]++;
        } else {
            genreCounter[genre] = 1;
        }
    });
});

console.log(genreCounter);

// Recursive factorial
function factorialRecursive(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorialRecursive(number - 1);
}

let number = 5;
let result = factorialRecursive(number);
console.log(`The recursive factorial of ${number} is ${result}.`);

// Iterative factorial
function factorialIterative(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log(`The iterative factorial of ${number} is ${factorial}.`);
}

factorialIterative(number);

