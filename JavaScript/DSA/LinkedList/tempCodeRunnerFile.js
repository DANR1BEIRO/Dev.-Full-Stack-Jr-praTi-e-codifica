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