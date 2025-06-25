function groupSalesByClient(sales) {
    return sales.reduce((acc, sale) => {
        if (acc[sale.cliente]) {
            acc[sale.cliente] += sale.total;
        } else {
            acc[sale.cliente] = sale.total;
        }
        return acc;
    }, {});
}

const sales = [
    { cliente: "Gohan", total: 100 },
    { cliente: "Goten", total: 200 },
    { cliente: "Piccolo", total: 150 },
    { cliente: "Kame", total: 50 },
    { cliente: "Goku", total: 300 }
];

const result = groupSalesByClient(sales);
console.log(result);
