class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /* prettier-ignore */
    addToFront(value) {
        let newNode = new Node(value);      // cria um novo node 
        newNode.next = this.head;       // new_node aponta para o início da lista(se tornando o primeiro)
        if (this.head) {                 // se this.head for true(se a lista tiver elementos) (ex: 1)
            this.head.prev = newNode;   // head.previous aponta para o novo node: 2 (ex: 2, 1)
        } else {                         // se a lista for vazia
            this.tail = newNode;        // tail = novo node
        }
        this.head = newNode;            // head = novo node
    }

    addToEnd(value) {
        let newNode = new Node(value);
        newNode.prev = this.tail;
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }
    /* prettier-ignore */
    removeFromFront() {
        if (!this.head) return null;   // se não existir head, retorna null
        let removedValue = this.head;  // se existir head, atribui esse valor à uma variável que será removida
        this.head = this.head.next;    // aponta o head para o próximo elemento da direita
        if (this.head) {               // se existir próximo elemento
            this.head.prev = null;     // elimina a referência para o elemento anterior, se tornando o head
        } else {                       // se não existir head, também não existe tail (lista vazia)
            this.tail = null
        }
        return removedValue;        
    }

    removeFromEnd() {
        if (!this.tail) return null;
        let removedValue = this.tail;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        return removedValue;
    }

    printList() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + " <-> "; // Representa conexão dupla
            current = current.next;
        }
        output += "null";
        console.log("Lista: ", output);
    }

    removeFromFrontValue() {
        /*
        removeFromFront
        1. Se a lista estiver vazia, retorna null
        2. Armazena o valor do head atual
        3. Se houver apenas um nó (head === tail):
        - Define head e tail como null
        4. Senão:
        - O head passa a ser o próximo nó
        - O prev do novo head é ajustado para null
        5. Retorna o valor removido
        */
        if (!this.head) return null; // Lista vazia

        const removedValue = this.head.value;
        if (this.head === this.tail) {
            // Apenas um nó na lista
            this.head = this.tail = null;
        } else {
            this.head = this.head.next; // Avança o head
            this.head.prev = null; // Remove a referência para o antigo head
        }
        return removedValue;
    }
}

let dll = new DoublyLinkedList();

dll.addToFront(3);
dll.addToFront(2);
dll.addToFront(1);
dll.addToEnd(4);
dll.addToEnd(5);

console.log(dll.removeFromFront());
console.log("------------------");
console.log(dll.removeFromFrontValue());
