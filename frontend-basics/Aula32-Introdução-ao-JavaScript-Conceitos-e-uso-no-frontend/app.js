const formAdicionar = document.getElementById('form-adicionar');
const inputItem = document.getElementById('input-item');
const listaItems = document.getElementById('lista-itens');
const btnLimpar = document.getElementById('btn-limpar');
const filtroStatus = document.getElementById('filtro-status');
const ordenar = document.getElementById('ordernar');
const contadorTotal = document.getElementById('contador-total');
const contadorPendentes = document.getElementById('contador-pendentes');
const contadorComprados = document.getElementById('contador-comprados');

let items = [];

function salvarDados() {
    try {
        localStorage.setItem('ListaCompras', JSON.stringify(items));
        console.log('Dados salvos no localStorage:', items);
    } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
    }
}

function atualizarContadores() {
    const total = items.length;
    const comprados = items.filter(item => item.purchased).length;
    const pendentes = total - comprados;
    contadorTotal.textContent = `Total: ${total}`;
    contadorPendentes.textContent = `Pendentes: ${pendentes}`;
    contadorComprados.textContent = `Comprados: ${comprados}`;
}

function getItensFiltrados() {
    const filtro = filtroStatus.value;
    if (filtro === 'pending') {
        return items.filter(item => !item.purchased);
    } else if (filtro === 'purchased') {
        return items.filter(item => item.purchased);
    }
    return items;
}

function getItensOrdenados(itensFiltrados) {
    const ordenacao = ordenar.value;
    let itensOrdenados = [...itensFiltrados];

    if (ordenacao === 'alphabetical') {
        itensOrdenados.sort((a, b) => a.text.localeCompare(b.text));
    } else if (ordenacao === 'status') {
        itensOrdenados.sort((a, b) => {
            if (a.purchased === b.purchased) return a.text.localeCompare(b.text);
            return a.purchased ? 1 : -1;
        });
    }
    return itensOrdenados;
}

function renderizarLista() {
    console.log('Renderizando lista com itens:', items);
    listaItems.innerHTML = '';

    if (items.length === 0) {
        const vazio = document.createElement('li');
        vazio.textContent = 'Nenhum item na lista.';
        vazio.style.color = 'gray';
        listaItems.appendChild(vazio);
        atualizarContadores();
        return;
    }

    const itensFiltrados = getItensFiltrados();
    const itensOrdenados = getItensOrdenados(itensFiltrados);

    if (itensOrdenados.length === 0) {
        const vazio = document.createElement('li');
        vazio.textContent = 'Nenhum item corresponde ao filtro.';
        vazio.style.color = 'gray';
        listaItems.appendChild(vazio);
        atualizarContadores();
        return;
    }

    itensOrdenados.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = item.purchased ? 'comprado' : '';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.purchased;
        checkbox.addEventListener('change', () => {
            const originalIndex = items.findIndex(i => i.text === item.text && i.purchased === item.purchased);
            items[originalIndex].purchased = checkbox.checked;
            salvarDados();
            renderizarLista();
        });

        const span = document.createElement('span');
        span.textContent = item.text;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'x';
        btnRemover.style.marginLeft = '10px';
        btnRemover.addEventListener('click', () => {
            const originalIndex = items.findIndex(i => i.text === item.text && i.purchased === item.purchased);
            console.log('Removendo item no índice:', originalIndex);
            removerItem(originalIndex);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(btnRemover);
        listaItems.appendChild(li);
    });

    atualizarContadores();
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
    if (items.some(item => item.text === novoItem)) {
        console.log('Item já existe na lista:', novoItem);
        return;
    }

    items.push({ text: novoItem, purchased: false });
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

filtroStatus.addEventListener('change', () => {
    console.log('Filtro alterado para:', filtroStatus.value);
    renderizarLista();
});

ordenar.addEventListener('change', () => {
    console.log('Ordenação alterada para:', ordenar.value);
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

console.log('Elementos DOM:', { formAdicionar, inputItem, listaItems, btnLimpar, filtroStatus, ordenar, contadorTotal, contadorPendentes, contadorComprados });