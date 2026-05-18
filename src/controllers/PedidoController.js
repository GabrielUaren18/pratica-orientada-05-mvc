import PedidoService from "../services/PedidoService.js";
import PedidoRepository from "../repositories/PedidoRepository.js";

export default class PedidoController {

    constructor() {

        this.pedidoService =
            new PedidoService();

        this.pedidoRepository =
            new PedidoRepository();
    }

    async finalizarPedido(pedido) {

        const pedidoFinalizado =
            this.pedidoService.finalizarPedido(pedido);

        await this.pedidoRepository.salvarPedido(
            pedidoFinalizado
        );

        return pedidoFinalizado;
    }

    enviarWhatsApp(pedido) {

        const mensagem =
            this.pedidoService
                .gerarMensagemWhatsApp(pedido);

        const numero =
            "5588999999999";

        const link =
            `https://wa.me/${numero}?text=${mensagem}`;

        console.log(link);
    }

}