import DescontoService from "./DescontoService.js";

export default class PedidoService {

    constructor() {
        this.descontoService = new DescontoService();
    }

    finalizarPedido(pedido) {

        let total = pedido.calcularTotal();

        total = this.descontoService.aplicarDesconto(total);

        pedido.total = total;

        return pedido;
    }

    gerarMensagemWhatsApp(pedido) {

        let mensagem =
            `Pedido de ${pedido.cliente}%0A`;

        pedido.itens.forEach(item => {

            mensagem +=
                `${item.produto.nome} - ${item.quantidade}%0A`;

        });

        mensagem += `Total: R$ ${pedido.total}`;

        return mensagem;
    }

}