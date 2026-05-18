import Pedido from "../models/Pedido.js";

export default class PedidoFactory {

    static criarPedido(cliente) {
        return new Pedido(cliente);
    }

}