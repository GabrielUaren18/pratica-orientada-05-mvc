import Produto from "./models/Produto.js";
import ItemPedido from "./models/ItemPedido.js";

import PedidoController from "./controllers/PedidoController.js";

import PedidoView from "./views/pedidoView.js";

import PedidoFactory from "./patterns/PedidoFactory.js";
import Observer from "./patterns/Observer.js";

const produto1 = new Produto(1, "Pizza", 50);

const item1 = new ItemPedido(produto1, 2);

const pedido = PedidoFactory.criarPedido("Gabriel");

pedido.adicionarItem(item1);

const controller = new PedidoController();

const view = new PedidoView();

const observer = new Observer();

observer.adicionar(view);

async function iniciar() {

    const pedidoFinalizado =
        await controller.finalizarPedido(pedido);

    observer.notificar(pedidoFinalizado);

    controller.enviarWhatsApp(pedidoFinalizado);
}

iniciar();