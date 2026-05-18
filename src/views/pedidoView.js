export default class PedidoView {

    atualizar(pedido) {

        console.log("Cliente:", pedido.cliente);

        pedido.itens.forEach(item => {

            console.log(
                item.produto.nome,
                item.quantidade
            );

        });

        console.log("Total:", pedido.total);
    }

}