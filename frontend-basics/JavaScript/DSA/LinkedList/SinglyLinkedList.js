class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /* prettier-ignore */
    addToFront(value) {
        let newNode = new Node(value);      // Cria um novo nó
        newNode.next = this.head;           // O novo nó aponta para o antigo head
        this.head = newNode;                // Atualiza o head para o novo nó
        if (!this.tail) {
            // Se a lista estava vazia,
        this.tail = newNode;                // o tail também aponta para o novo nó
        }
    }
    // if (!this.head) {
    //     this.head = newNode;
    // } else {
    //     newNode.next = this.head;
    //     this.head = newNode
    // }

    addToEnd(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    printList() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + " -> "; // Representa conexão entre os nós
            current = current.next;
        }
        output += "null";
        console.log("Lista: ", output);
    }
}

let dll = new SinglyLinkedList();

dll.addToFront(3);
dll.addToFront(2);
dll.addToFront(1);
dll.addToEnd(90);

dll.printList();
