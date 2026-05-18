export default class Pedido {
    constructor(cliente) {
        this.cliente = cliente;
        this.itens = [];
        this.total = 0;
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    calcularTotal() {
        this.total = this.itens.reduce(
            (acc, item) => acc + item.calcularSubtotal(),
            0
        );

        return this.total;
    }
}