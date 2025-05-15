function descendingCounter(number) {
    let arr = []
    for (let i = number; i > 0; i--) {
        arr.push(i)
    }
    console.log(arr.join(", ") + ".");
}

descendingCounter(10);
