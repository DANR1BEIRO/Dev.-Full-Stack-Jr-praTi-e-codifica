function printTenTimes(number) {
    let arr = [];
    for (let i = 1; i < 11; i++) {
        arr.push(number);
    }
    console.log(arr.join(", ") + ".");
}

printTenTimes(10);
