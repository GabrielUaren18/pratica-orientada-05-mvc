import AppConfig from "../patterns/AppConfig.js";

export default class PedidoRepository {

    constructor() {
        this.config = new AppConfig();
    }

    async salvarPedido(pedido) {

        await fetch(`${this.config.apiURL}/pedidos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pedido)
        });

    }
}