function triangle(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            return "Equilateral triangle";
        } else if (a === b || a === c || b === c) {
            return "Isosceles triangle";
        }
        return "Scalene triangle";
    }
    return "It can't be a triangle"
}

console.log(triangle(10, 10, 10));
console.log(triangle(10, 10, 5));
console.log(triangle(10, 6, 5));
console.log(triangle(3, 2, 1));
