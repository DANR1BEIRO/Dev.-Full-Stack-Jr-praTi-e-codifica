function totalApplesPurchase(quantity) {
    const PRICE = quantity < 12 ? 0.3 : 0.25;
    const TOTAL = PRICE * quantity;
    return TOTAL.toFixed(2);
}

let total = totalApplesPurchase(10);

console.log(`The total purchase was: $${total}`);
