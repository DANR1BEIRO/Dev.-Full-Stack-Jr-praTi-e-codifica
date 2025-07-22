const formAdicionar = document.getElementById('form-adicionar');
const inputItem = document.getElementById('input-item');
const listaItems = document.getElementById('lista-itens');
const btnLimpar = document.getElementById('btn-limpar');

let items = [];

function salvarDados() {
    try {
        localStorage.setItem('ListaCompras', JSON.stringify(items));
        console.log('Dados salvos no localStorage:', items);
    } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
    }
}

function renderizarLista() {
    console.log('Renderizando lista com itens:', items);
    listaItems.innerHTML = '';

    if (items.length === 0) {
        const vazio = document.createElement('li');
        vazio.textContent = 'Nenhum item na lista.';
        vazio.style.color = 'gray';
        listaItems.appendChild(vazio);
        return;
    }

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'x';
        btnRemover.style.marginLeft = '10px';
        btnRemover.addEventListener('click', () => {
            console.log('Removendo item no índice:', index);
            removerItem(index);
        });

        li.appendChild(btnRemover);
        listaItems.appendChild(li);
    });
}

function removerItem(index) {
    items.splice(index, 1);
    salvarDados();
    renderizarLista();
}

formAdicionar.addEventListener('submit', (e) => {
    e.preventDefault();
    const novoItem = inputItem.value.trim();
    if (novoItem === '') {
        console.log('Tentativa de adicionar item vazio, ignorando.');
        return;
    }
    if (items.includes(novoItem)) {
        console.log('Item já existe na lista:', novoItem);
        return;
    }

    items.push(novoItem);
    console.log('Item adicionado:', novoItem);
    salvarDados();
    renderizarLista();
    inputItem.value = '';
});

btnLimpar.addEventListener('click', () => {
    console.log('Limpando lista.');
    items = [];
    salvarDados();
    renderizarLista();
});

window.addEventListener('DOMContentLoaded', () => {
    try {
        const dadosSalvos = localStorage.getItem('ListaCompras');
        if (dadosSalvos) {
            items = JSON.parse(dadosSalvos);
            console.log('Dados carregados do localStorage:', items);
        } else {
            console.log('Nenhum dado encontrado no localStorage.');
        }
        renderizarLista();
    } catch (error) {
        console.error('Erro ao carregar dados do localStorage:', error);
    }
});

// Verificação inicial para garantir que os elementos foram encontrados
console.log('Elementos DOM:', { formAdicionar, inputItem, listaItems, btnLimpar });
// const formAdicionar = document.getElementById('form-adicionar');
// const inputItem = document.getElementById('input-item');
// const listaItems = document.getElementById('lista-itens');
// const btnLimpar = document.getElementById('btn-limpar');

// let items = [];

// function salvarDados() {
//     localStorage.setItem('ListaCompras', JSON.stringify(items));
// }

// function renderizarLista() {
//     listaItems.innerHTML = '';

//     if (items.length === 0) {
//         const vazio = document.createElement('li');
//         vazio.textContent = 'Nenhum item na lista.';
//         vazio.style.color = 'gray';
//         listaItems.appendChild(vazio);
//         return;
//     }

//     items.forEach((item, index) => {
//         const li = document.createElement('li');
//         li.textContent = item;

//         const btnRemover = document.createElement('button');
//         btnRemover.textContent = 'X';
//         btnRemover.style.marginLeft = '10px';
//         btnRemover.addEventListener('click', () => removerItem(index));

//         li.appendChild(btnRemover);
//         listaItems.appendChild(li);
//     });
// }

// function removerItem(index) {
//     items.splice(index, 1);
//     salvarDados();
//     renderizarLista();
// }

// formAdicionar.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const novoItem = inputItem.value.trim();
//     if (novoItem === '') return;

//     items.push(novoItem);
//     salvarDados();
//     renderizarLista();
//     inputItem.value = '';
// });

// btnLimpar.addEventListener('click', () => {
//     items = [];
//     salvarDados();
//     renderizarLista();
// });

// window.addEventListener('DOMContentLoaded', () => {
//     const dadosSalvos = localStorage.getItem('ListaCompras');
//     if (dadosSalvos) {
//         items = JSON.parse(dadosSalvos);
//     }
//     renderizarLista();
// });
