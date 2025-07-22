function getSortedNamesByPrice(products) {
    const sorted = products.slice().sort((a, b) => a.preco - b.preco);
    return sorted.map(product => product.nome);
}

const products = [
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 450 },
    { nome: "Teclado", preco: 120 },
    { nome: "Notebook", preco: 3000 }
];

const result = getSortedNamesByPrice(products);
console.log(result);
